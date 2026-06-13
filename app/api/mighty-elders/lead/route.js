// Mighty Elders quiz lead capture endpoint.
//
// This is a placeholder that simply logs the lead server-side and returns OK.
// Replace the body of POST() with your real handler when ready — for example:
//
//   • Mailchimp:    https://mailchimp.com/developer/marketing/api/list-members/add-member-to-list/
//   • ConvertKit:   https://developers.convertkit.com/v4.html#create-a-subscriber
//   • Formspree:    POST to https://formspree.io/f/{your-id}
//   • Resend + DB:  send the welcome email and persist the lead
//
// For local development, leads will appear in the Vercel function logs.

export async function POST(request) {
  try {
    const body = await request.json();
    const { email, score, answers } = body || {};

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return Response.json(
        { ok: false, error: "Invalid email" },
        { status: 400 },
      );
    }

    // Server-side log — replace with real persistence/email.
    console.log("[mighty-elders/lead]", {
      email,
      score,
      tier: tierFromScore(score),
      answers,
      receivedAt: new Date().toISOString(),
    });

    return Response.json({ ok: true });
  } catch (err) {
    console.error("[mighty-elders/lead] error", err);
    return Response.json({ ok: false }, { status: 500 });
  }
}

function tierFromScore(score) {
  const max = 32;
  const pct = (Number(score || 0) / max) * 100;
  if (pct < 30) return "Newcomer";
  if (pct < 60) return "Curious Learner";
  if (pct < 85) return "Ready Defender";
  return "Living Library";
}
