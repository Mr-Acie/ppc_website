// Admin endpoint — returns recent quiz finishers pulled live from ConvertKit.
//
// Auth: requires ?token=... matching MIGHTY_ELDERS_ADMIN_TOKEN env var.
// Data source: ConvertKit's /v3/forms/{form_id}/subscriptions endpoint, which
// lists everyone who subscribed via the Mighty Elders AI Confidence Quiz form.

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const TIER_TAGS = {
  "me-tier-newcomer": "Newcomer",
  "me-tier-curious-learner": "Curious Learner",
  "me-tier-ready-defender": "Ready Defender",
  "me-tier-living-library": "Living Library",
};

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const token = searchParams.get("token") || "";
    const expected = process.env.MIGHTY_ELDERS_ADMIN_TOKEN || "";

    if (!expected || token !== expected) {
      return Response.json({ ok: false, error: "Unauthorized" }, { status: 401 });
    }

    const apiKey = process.env.CONVERTKIT_API_KEY;
    const formId = process.env.CONVERTKIT_FORM_ID;

    if (!apiKey || !formId) {
      return Response.json(
        {
          ok: false,
          error:
            "ConvertKit not configured. Set CONVERTKIT_API_KEY and CONVERTKIT_FORM_ID.",
        },
        { status: 503 },
      );
    }

    // Fetch the latest 50 form subscriptions, sorted descending.
    const url = new URL(
      `https://api.convertkit.com/v3/forms/${encodeURIComponent(formId)}/subscriptions`,
    );
    url.searchParams.set("api_secret", apiKey);
    url.searchParams.set("sort_order", "desc");

    const res = await fetch(url, { cache: "no-store" });
    if (!res.ok) {
      const errText = await res.text().catch(() => "");
      return Response.json(
        { ok: false, error: `ConvertKit ${res.status}: ${errText}` },
        { status: 502 },
      );
    }

    const data = await res.json();
    const subscriptions = Array.isArray(data?.subscriptions)
      ? data.subscriptions
      : [];

    // For each subscription, pull the subscriber's tags so we can label the tier.
    // We do this in small batches to be polite to the API.
    const leads = await Promise.all(
      subscriptions.slice(0, 50).map(async (sub) => {
        const subscriber = sub?.subscriber || {};
        const id = subscriber.id;
        let tags = [];
        if (id) {
          try {
            const tagRes = await fetch(
              `https://api.convertkit.com/v3/subscribers/${id}/tags?api_secret=${encodeURIComponent(apiKey)}`,
              { cache: "no-store" },
            );
            if (tagRes.ok) {
              const tagData = await tagRes.json();
              tags = (tagData?.tags || []).map((t) => t.name).filter(Boolean);
            }
          } catch {
            // ignore per-subscriber tag fetch failures
          }
        }
        return {
          id,
          email: subscriber.email_address,
          state: sub.state || subscriber.state,
          createdAt: sub.created_at || subscriber.created_at,
          tags,
        };
      }),
    );

    // Aggregate counts by tier.
    const counts = {
      Newcomer: 0,
      "Curious Learner": 0,
      "Ready Defender": 0,
      "Living Library": 0,
    };
    for (const lead of leads) {
      for (const tag of lead.tags) {
        const tier = TIER_TAGS[tag];
        if (tier) {
          counts[tier] = (counts[tier] || 0) + 1;
          break;
        }
      }
    }

    return Response.json({
      ok: true,
      leads,
      counts,
      totalSubscribers:
        typeof data?.total_subscriptions === "number"
          ? data.total_subscriptions
          : leads.length,
      fetchedAt: new Date().toISOString(),
    });
  } catch (err) {
    console.error("[mighty-elders/admin/leads] error", err);
    return Response.json(
      { ok: false, error: err?.message || "Internal error" },
      { status: 500 },
    );
  }
}
