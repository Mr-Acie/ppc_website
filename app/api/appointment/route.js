// Appointment request endpoint.
//
// Pipeline: client POSTs the form -> we
//   (1) validate and normalize the payload
//   (2) email Acie a notification with all details (Resend)
//   (3) optionally email the requester a polite confirmation (Resend)
//
// Required environment variables (set in Vercel project settings):
//   RESEND_API_KEY         - from https://resend.com/api-keys
//   RESEND_FROM_EMAIL      - e.g. "Pampered Companion Care <hello@pamperedcompanioncare.org>"
//                            (the domain must be verified in Resend)
//   APPOINTMENTS_TO_EMAIL  - where to send the internal notification
//                            (defaults to acie@pamperedcompanioncare.org)
//
// If env vars are missing in local dev, the endpoint still returns 200 and
// logs what would have been sent.

export const runtime = "nodejs";

const APPOINTMENT_TYPE_LABELS = {
  "phone-consult": "Free 20-min phone consultation",
  "in-home-tech": "In-home tech & AI session",
  workshop: "Workshop / community booking",
};

export async function POST(request) {
  try {
    const body = await request.json();
    const {
      appointmentType,
      name,
      phone,
      email,
      preferredDay,
      preferredTime,
      notes,
      website, // honeypot
    } = body || {};

    // Honeypot — silently succeed for bots.
    if (website) {
      return Response.json({ ok: true });
    }

    const errors = [];
    if (!name || typeof name !== "string" || name.length > 200) {
      errors.push("name");
    }
    if (!phone || typeof phone !== "string" || phone.length > 40) {
      errors.push("phone");
    }
    if (email && (typeof email !== "string" || !email.includes("@") || email.length > 320)) {
      errors.push("email");
    }
    const typeLabel = APPOINTMENT_TYPE_LABELS[appointmentType];
    if (!typeLabel) errors.push("appointmentType");

    if (errors.length) {
      return Response.json(
        { ok: false, error: `Invalid fields: ${errors.join(", ")}` },
        { status: 400 },
      );
    }

    const meta = {
      appointmentType,
      typeLabel,
      name: name.trim(),
      phone: phone.trim(),
      email: (email || "").trim(),
      preferredDay: (preferredDay || "").trim(),
      preferredTime: (preferredTime || "").trim(),
      notes: (notes || "").trim(),
      receivedAt: new Date().toISOString(),
    };

    // Fire both emails in parallel — one failure doesn't block the other.
    const [internalResult, confirmResult] = await Promise.allSettled([
      sendInternalNotification(meta),
      meta.email ? sendVisitorConfirmation(meta) : Promise.resolve({ sent: false, reason: "no_email" }),
    ]);

    if (internalResult.status === "rejected") {
      console.error("[appointment] internal email failed:", internalResult.reason);
    }
    if (confirmResult.status === "rejected") {
      console.error("[appointment] confirm email failed:", confirmResult.reason);
    }

    console.log("[appointment] received", {
      ...meta,
      internalEmail: internalResult.status,
      confirmEmail: confirmResult.status,
    });

    return Response.json({
      ok: true,
      internalEmailSent:
        internalResult.status === "fulfilled" && internalResult.value?.sent,
      confirmEmailSent:
        confirmResult.status === "fulfilled" && confirmResult.value?.sent,
    });
  } catch (err) {
    console.error("[appointment] error", err);
    return Response.json({ ok: false }, { status: 500 });
  }
}

// ---------------------------------------------------------------------------
// Resend — internal notification to Acie
// ---------------------------------------------------------------------------

async function sendInternalNotification(meta) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;
  const to =
    process.env.APPOINTMENTS_TO_EMAIL || "acie@pamperedcompanioncare.org";

  if (!apiKey || !from) {
    console.warn(
      "[appointment] Resend not configured — skipping notification. " +
        "Set RESEND_API_KEY and RESEND_FROM_EMAIL to enable.",
    );
    return { sent: false, reason: "not_configured" };
  }

  const subject = `New appointment request — ${meta.typeLabel} (${meta.name})`;

  const html = internalNotificationHtml(meta);
  const text = internalNotificationText(meta);

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      subject,
      html,
      text,
      reply_to: meta.email || undefined,
      tags: [
        { name: "campaign", value: "appointment-request" },
        { name: "type", value: meta.appointmentType },
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
// Resend — polite confirmation to the visitor (if they gave an email)
// ---------------------------------------------------------------------------

async function sendVisitorConfirmation(meta) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;

  if (!apiKey || !from) {
    return { sent: false, reason: "not_configured" };
  }

  const subject =
    "We got your appointment request — Pampered Companion Care";
  const html = visitorConfirmHtml(meta);
  const text = visitorConfirmText(meta);

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [meta.email],
      subject,
      html,
      text,
      reply_to: "acie@pamperedcompanioncare.org",
      tags: [{ name: "campaign", value: "appointment-confirmation" }],
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
// Templates
// ---------------------------------------------------------------------------

function row(label, value) {
  if (!value) return "";
  return `
    <tr>
      <td style="padding:8px 0;font-size:13px;color:#6B6B6B;width:160px;vertical-align:top;">${escapeHtml(label)}</td>
      <td style="padding:8px 0;font-size:15px;color:#15243B;vertical-align:top;">${escapeHtml(value).replace(/\n/g, "<br/>")}</td>
    </tr>`;
}

function internalNotificationHtml(meta) {
  return `<!doctype html>
<html lang="en">
  <body style="margin:0;padding:0;background:#FBF8F2;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;color:#15243B;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#FBF8F2;padding:32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;background:#ffffff;border-radius:8px;border:1px solid #E2D9C8;overflow:hidden;">
            <tr>
              <td style="background:#0B2545;padding:24px 32px;">
                <p style="margin:0;font-size:12px;font-weight:600;letter-spacing:0.2em;text-transform:uppercase;color:#B8965A;">New appointment request</p>
                <h1 style="margin:8px 0 0;font-size:22px;line-height:1.3;font-weight:600;color:#ffffff;font-family:Georgia,'Times New Roman',serif;">${escapeHtml(meta.typeLabel)}</h1>
              </td>
            </tr>
            <tr>
              <td style="padding:24px 32px;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                  ${row("Name", meta.name)}
                  ${row("Phone", meta.phone)}
                  ${row("Email", meta.email)}
                  ${row("Preferred day", meta.preferredDay)}
                  ${row("Preferred time", meta.preferredTime)}
                  ${row("Notes", meta.notes)}
                  ${row("Submitted", new Date(meta.receivedAt).toLocaleString("en-US", { timeZone: "America/New_York" }) + " ET")}
                </table>

                <table role="presentation" cellpadding="0" cellspacing="0" style="margin:24px 0 0;">
                  <tr>
                    <td style="background:#B8965A;border-radius:4px;">
                      <a href="tel:${encodeURIComponent(meta.phone)}" style="display:inline-block;padding:12px 24px;font-size:14px;font-weight:600;color:#ffffff;text-decoration:none;">Call ${escapeHtml(meta.phone)}</a>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

function internalNotificationText(meta) {
  return [
    "New appointment request",
    "",
    `Type: ${meta.typeLabel}`,
    `Name: ${meta.name}`,
    `Phone: ${meta.phone}`,
    meta.email ? `Email: ${meta.email}` : null,
    meta.preferredDay ? `Preferred day: ${meta.preferredDay}` : null,
    meta.preferredTime ? `Preferred time: ${meta.preferredTime}` : null,
    meta.notes ? `Notes:\n${meta.notes}` : null,
    "",
    `Submitted: ${new Date(meta.receivedAt).toLocaleString("en-US", { timeZone: "America/New_York" })} ET`,
  ]
    .filter(Boolean)
    .join("\n");
}

function visitorConfirmHtml(meta) {
  return `<!doctype html>
<html lang="en">
  <body style="margin:0;padding:0;background:#FBF8F2;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;color:#15243B;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#FBF8F2;padding:32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;background:#ffffff;border-radius:8px;border:1px solid #E2D9C8;overflow:hidden;">
            <tr>
              <td style="background:#0B2545;padding:32px;text-align:center;">
                <p style="margin:0;font-size:12px;font-weight:600;letter-spacing:0.2em;text-transform:uppercase;color:#B8965A;">Pampered Companion Care</p>
                <h1 style="margin:12px 0 0;font-size:26px;line-height:1.3;font-weight:600;color:#ffffff;font-family:Georgia,'Times New Roman',serif;">We got your request, ${escapeHtml(meta.name.split(" ")[0])}.</h1>
              </td>
            </tr>
            <tr>
              <td style="padding:32px;">
                <p style="margin:0 0 16px;font-size:16px;line-height:1.6;">Thank you for reaching out. We&rsquo;ll call you back at <strong>${escapeHtml(meta.phone)}</strong> within one business day to confirm your <strong>${escapeHtml(meta.typeLabel.toLowerCase())}</strong>.</p>

                <div style="background:#FBF8F2;border:1px solid #F3EFE4;border-radius:6px;padding:16px 20px;margin:16px 0;">
                  <p style="margin:0 0 6px;font-size:12px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#0B2545;">What you told us</p>
                  ${meta.preferredDay ? `<p style="margin:4px 0;font-size:14px;">Preferred day: <strong>${escapeHtml(meta.preferredDay)}</strong></p>` : ""}
                  ${meta.preferredTime ? `<p style="margin:4px 0;font-size:14px;">Preferred time: <strong>${escapeHtml(meta.preferredTime)}</strong></p>` : ""}
                  ${meta.notes ? `<p style="margin:8px 0 0;font-size:14px;">Notes: ${escapeHtml(meta.notes)}</p>` : ""}
                </div>

                <p style="margin:0 0 16px;font-size:15px;line-height:1.6;">If you&rsquo;d like to reach us sooner, you can call <a href="tel:3264673161" style="color:#0B2545;font-weight:600;">(326) 467-3161</a> Mon&ndash;Fri 9 AM&ndash;5 PM.</p>

                <p style="margin:0;font-size:15px;line-height:1.6;">Warmly,<br/>Acie Grimes<br/><span style="color:#6B6B6B;">Pampered Companion Care</span></p>
              </td>
            </tr>
            <tr>
              <td style="background:#F3EFE4;padding:16px 32px;text-align:center;">
                <p style="margin:0;font-size:12px;line-height:1.5;color:#6B6B6B;">
                  Pampered Companion Care &middot; Dayton &amp; Montgomery County, Ohio<br/>
                  <a href="https://pamperedcompanioncare.org" style="color:#0B2545;text-decoration:underline;">pamperedcompanioncare.org</a>
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

function visitorConfirmText(meta) {
  return [
    `We got your request, ${meta.name.split(" ")[0]}.`,
    "",
    `Thank you for reaching out. We'll call you back at ${meta.phone} within one business day to confirm your ${meta.typeLabel.toLowerCase()}.`,
    "",
    meta.preferredDay ? `Preferred day: ${meta.preferredDay}` : null,
    meta.preferredTime ? `Preferred time: ${meta.preferredTime}` : null,
    meta.notes ? `Notes: ${meta.notes}` : null,
    "",
    "Need us sooner? Call (326) 467-3161 Mon–Fri 9 AM–5 PM.",
    "",
    "— Acie Grimes, Pampered Companion Care",
    "https://pamperedcompanioncare.org",
  ]
    .filter(Boolean)
    .join("\n");
}

function escapeHtml(str) {
  return String(str || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
