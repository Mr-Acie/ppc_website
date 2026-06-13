// Mighty Elders quiz lead capture endpoint.
//
// Pipeline: client POSTs { email, score, answers } -> we
//   (1) compute the tier from the score
//   (2) fire a personalized welcome email via Resend
//   (3) add the lead to ConvertKit (Kit) with a tier tag so the nurture
//       sequence picks them up automatically
//
// All third-party calls are wrapped so a failure in one does not block the
// other (or the user). If env vars are missing in local dev, the endpoint
// still returns 200 and logs what would have been sent — so the page works
// out of the box.
//
// Required environment variables (set in Vercel project settings):
//   RESEND_API_KEY            – from https://resend.com/api-keys
//   RESEND_FROM_EMAIL         – e.g. "Acie Grimes <acie@pamperedcompanioncare.org>"
//                               (the domain must be verified in Resend)
//   CONVERTKIT_API_KEY        – v3 API secret from Kit account settings
//   CONVERTKIT_FORM_ID        – numeric ID of the "Mighty Elders Quiz" form
//                               in Kit (Forms > pick form > URL ends in the ID)

export const runtime = "nodejs";

const TIER_CONFIG = {
  Newcomer: {
    minPct: 0,
    headline: "You're at the starting line — and that's exactly where most people stand.",
    cta: "Start with our free \"AI in Plain English\" intro lesson",
    tagName: "me-tier-newcomer",
  },
  "Curious Learner": {
    minPct: 30,
    headline: "You've got a foothold. Now let's build real confidence.",
    cta: "Jump into the AI Confidence Track — Week 1 ships to your inbox immediately",
    tagName: "me-tier-curious-learner",
  },
  "Ready Defender": {
    minPct: 60,
    headline: "You're more equipped than 90% of your peers. Let's sharpen the edge.",
    cta: "Go straight to the Advanced AI Toolkit",
    tagName: "me-tier-ready-defender",
  },
  "Living Library": {
    minPct: 85,
    headline: "You're already at the forefront. The movement needs you.",
    cta: "Apply for our founding Community Captain cohort",
    tagName: "me-tier-living-library",
  },
};

const MAX_SCORE = 32;

function tierFromScore(score) {
  const pct = (Number(score || 0) / MAX_SCORE) * 100;
  if (pct >= 85) return "Living Library";
  if (pct >= 60) return "Ready Defender";
  if (pct >= 30) return "Curious Learner";
  return "Newcomer";
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { email, score, answers } = body || {};

    if (
      !email ||
      typeof email !== "string" ||
      !email.includes("@") ||
      email.length > 320
    ) {
      return Response.json(
        { ok: false, error: "Invalid email" },
        { status: 400 },
      );
    }

    const tier = tierFromScore(score);
    const config = TIER_CONFIG[tier];

    const meta = {
      email,
      score: Number(score || 0),
      tier,
      answers,
      receivedAt: new Date().toISOString(),
    };

    // Fire both providers in parallel — don't let one failure block the other.
    const [resendResult, convertkitResult] = await Promise.allSettled([
      sendWelcomeEmail({ email, tier, config }),
      addToConvertKit({ email, tier, config }),
    ]);

    if (resendResult.status === "rejected") {
      console.error("[mighty-elders/lead] Resend failed:", resendResult.reason);
    }
    if (convertkitResult.status === "rejected") {
      console.error(
        "[mighty-elders/lead] ConvertKit failed:",
        convertkitResult.reason,
      );
    }

    console.log("[mighty-elders/lead] processed", {
      ...meta,
      resend: resendResult.status,
      convertkit: convertkitResult.status,
    });

    return Response.json({
      ok: true,
      tier,
      welcomeEmailSent: resendResult.status === "fulfilled" && resendResult.value?.sent,
      addedToList: convertkitResult.status === "fulfilled" && convertkitResult.value?.added,
    });
  } catch (err) {
    console.error("[mighty-elders/lead] error", err);
    return Response.json({ ok: false }, { status: 500 });
  }
}

// ---------------------------------------------------------------------------
// Resend — instant welcome email
// ---------------------------------------------------------------------------

async function sendWelcomeEmail({ email, tier, config }) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;

  if (!apiKey || !from) {
    console.warn(
      "[mighty-elders/lead] Resend not configured — skipping welcome email. " +
        "Set RESEND_API_KEY and RESEND_FROM_EMAIL to enable.",
    );
    return { sent: false, reason: "not_configured" };
  }

  const subject = `Your Mighty Elders result: ${tier}`;
  const html = welcomeEmailHtml({ tier, config });
  const text = welcomeEmailText({ tier, config });

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [email],
      subject,
      html,
      text,
      reply_to: "acie@pamperedcompanioncare.org",
      tags: [
        { name: "campaign", value: "mighty-elders" },
        { name: "tier", value: tier.toLowerCase().replace(/\s+/g, "-") },
      ],
    }),
  });

  if (!res.ok) {
    const errText = await res.text().catch(() => "");
    throw new Error(`Resend ${res.status}: ${errText}`);
  }

  const data = await res.json().catch(() => ({}));
  return { sent: true, id: data.id };
}

// ---------------------------------------------------------------------------
// ConvertKit (Kit) — add subscriber, tag by tier
// ---------------------------------------------------------------------------

async function addToConvertKit({ email, tier, config }) {
  const apiKey = process.env.CONVERTKIT_API_KEY;
  const formId = process.env.CONVERTKIT_FORM_ID;

  if (!apiKey || !formId) {
    console.warn(
      "[mighty-elders/lead] ConvertKit not configured — skipping list add. " +
        "Set CONVERTKIT_API_KEY and CONVERTKIT_FORM_ID to enable.",
    );
    return { added: false, reason: "not_configured" };
  }

  const res = await fetch(
    `https://api.convertkit.com/v3/forms/${encodeURIComponent(formId)}/subscribe`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        api_key: apiKey,
        email,
        tags: [config.tagName],
        fields: {
          me_tier: tier,
          me_signup_source: "ai-confidence-quiz",
        },
      }),
    },
  );

  if (!res.ok) {
    const errText = await res.text().catch(() => "");
    throw new Error(`ConvertKit ${res.status}: ${errText}`);
  }

  const data = await res.json().catch(() => ({}));
  return { added: true, subscription: data?.subscription?.id };
}

// ---------------------------------------------------------------------------
// Email templates — kept inline so no external template file is needed.
// Brand colors mirror the Mighty Elders palette.
// ---------------------------------------------------------------------------

function welcomeEmailHtml({ tier, config }) {
  return `<!doctype html>
<html lang="en">
  <body style="margin:0;padding:0;background:#FBF8F2;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;color:#15243B;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#FBF8F2;padding:32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;background:#ffffff;border-radius:8px;border:1px solid #E2D9C8;overflow:hidden;">
            <tr>
              <td style="background:#15243B;padding:32px 32px 24px;text-align:center;">
                <p style="margin:0;font-size:12px;font-weight:600;letter-spacing:0.2em;text-transform:uppercase;color:#C97B3D;">Mighty Elders</p>
                <h1 style="margin:12px 0 0;font-size:28px;line-height:1.2;font-weight:600;color:#ffffff;font-family:Georgia,'Times New Roman',serif;">Welcome to the movement.</h1>
              </td>
            </tr>
            <tr>
              <td style="padding:32px;">
                <p style="margin:0 0 8px;font-size:12px;font-weight:600;letter-spacing:0.15em;text-transform:uppercase;color:#C97B3D;">Your result</p>
                <h2 style="margin:0 0 12px;font-size:24px;line-height:1.3;font-weight:600;color:#15243B;font-family:Georgia,'Times New Roman',serif;">${escapeHtml(tier)}</h2>
                <p style="margin:0 0 24px;font-size:16px;line-height:1.6;color:#15243B;">${escapeHtml(config.headline)}</p>

                <div style="background:#FBF8F2;border:1px solid #F3EFE4;border-radius:6px;padding:20px;margin:0 0 24px;">
                  <p style="margin:0 0 12px;font-size:12px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#0F4C5C;">Your first step</p>
                  <p style="margin:0;font-size:16px;line-height:1.5;color:#15243B;">${escapeHtml(config.cta)}</p>
                </div>

                <table role="presentation" cellpadding="0" cellspacing="0" style="margin:0 0 24px;">
                  <tr>
                    <td style="background:#C97B3D;border-radius:4px;">
                      <a href="https://pamperedcompanioncare.org/mighty-elders#quiz" style="display:inline-block;padding:14px 28px;font-size:15px;font-weight:600;color:#ffffff;text-decoration:none;">Visit Mighty Elders</a>
                    </td>
                  </tr>
                </table>

                <p style="margin:0 0 16px;font-size:15px;line-height:1.6;color:#15243B;">Here's what happens next:</p>
                <ul style="margin:0 0 24px;padding:0 0 0 20px;font-size:15px;line-height:1.7;color:#15243B;">
                  <li>Over the next few days I'll send you a short series with the most useful AI skills for your tier — one at a time, in plain English.</li>
                  <li>You'll also get our free Scam Defender mini-course. It pays for itself the day you use it.</li>
                  <li>If you've got an adult child or a parent who should be in this too — forward this email. Mighty Elders was built for two generations.</li>
                </ul>

                <p style="margin:0 0 8px;font-size:15px;line-height:1.6;color:#15243B;">They thought you were done. They were wrong.</p>
                <p style="margin:0;font-size:15px;line-height:1.6;color:#15243B;">— Acie Grimes<br/><span style="color:#6B6B6B;">Founder, Mighty Elders</span></p>
              </td>
            </tr>
            <tr>
              <td style="background:#F3EFE4;padding:20px 32px;text-align:center;">
                <p style="margin:0;font-size:12px;line-height:1.5;color:#6B6B6B;">
                  Mighty Elders is a movement by <a href="https://pamperedcompanioncare.org" style="color:#0F4C5C;text-decoration:underline;">Pampered Companion Care</a> in Dayton, Ohio.<br/>
                  You're receiving this because you took the AI Confidence Quiz. Reply with the word <strong>STOP</strong> to unsubscribe.
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

function welcomeEmailText({ tier, config }) {
  return [
    "Welcome to the movement.",
    "",
    `Your result: ${tier}`,
    "",
    config.headline,
    "",
    `Your first step: ${config.cta}`,
    "",
    "Visit Mighty Elders: https://pamperedcompanioncare.org/mighty-elders#quiz",
    "",
    "Here's what happens next:",
    " - Over the next few days I'll send you a short series with the most useful AI skills for your tier — one at a time, in plain English.",
    " - You'll also get our free Scam Defender mini-course. It pays for itself the day you use it.",
    " - If you've got an adult child or a parent who should be in this too — forward this email. Mighty Elders was built for two generations.",
    "",
    "They thought you were done. They were wrong.",
    "",
    "— Acie Grimes",
    "Founder, Mighty Elders",
    "",
    "—",
    "Mighty Elders is a movement by Pampered Companion Care in Dayton, Ohio.",
    "You're receiving this because you took the AI Confidence Quiz. Reply with the word STOP to unsubscribe.",
  ].join("\n");
}

function escapeHtml(str) {
  return String(str || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
