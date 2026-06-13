"use client";

import { useEffect, useState } from "react";

const TIER_COLORS = {
  Newcomer: { bg: "bg-me-paper-alt", text: "text-me-ink" },
  "Curious Learner": { bg: "bg-me-primary/15", text: "text-me-primary" },
  "Ready Defender": { bg: "bg-me-accent/15", text: "text-me-accent" },
  "Living Library": { bg: "bg-me-emerald/15", text: "text-me-emerald" },
};

function tierFromTags(tags = []) {
  if (tags.includes("me-tier-living-library")) return "Living Library";
  if (tags.includes("me-tier-ready-defender")) return "Ready Defender";
  if (tags.includes("me-tier-curious-learner")) return "Curious Learner";
  if (tags.includes("me-tier-newcomer")) return "Newcomer";
  return "Unknown";
}

function formatDate(iso) {
  if (!iso) return "—";
  try {
    return new Date(iso).toLocaleString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "2-digit",
    });
  } catch {
    return iso;
  }
}

export default function LeadsTable({ token }) {
  const [state, setState] = useState({ loading: true, error: null, data: null });

  useEffect(() => {
    let cancelled = false;
    setState({ loading: true, error: null, data: null });
    fetch(`/api/mighty-elders/admin/leads?token=${encodeURIComponent(token)}`, {
      cache: "no-store",
    })
      .then(async (res) => {
        if (!res.ok) {
          throw new Error(`HTTP ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        if (!cancelled) setState({ loading: false, error: null, data });
      })
      .catch((err) => {
        if (!cancelled)
          setState({ loading: false, error: err.message || "Failed to load", data: null });
      });
    return () => {
      cancelled = true;
    };
  }, [token]);

  if (state.loading) {
    return (
      <div className="rounded-lg border border-border-main bg-white p-12 text-center">
        <p className="text-sm text-me-ink/60">Loading leads from ConvertKit...</p>
      </div>
    );
  }

  if (state.error) {
    return (
      <div className="rounded-lg border border-me-ruby/40 bg-me-ruby/5 p-6">
        <p className="font-semibold text-me-ruby">Could not load leads</p>
        <p className="mt-2 text-sm text-me-ink/70">{state.error}</p>
        <p className="mt-4 text-sm text-me-ink/60">
          Check that <code>CONVERTKIT_API_KEY</code> and <code>CONVERTKIT_FORM_ID</code> are set
          in Vercel and the deployment has been refreshed.
        </p>
      </div>
    );
  }

  const data = state.data || {};
  const leads = data.leads || [];
  const counts = data.counts || {};
  const totalSubscribers = data.totalSubscribers ?? leads.length;

  return (
    <div>
      {/* Summary cards */}
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-5">
        <div className="rounded-lg border border-border-main bg-white p-5">
          <p className="text-xs font-semibold uppercase tracking-wider text-me-ink/50">
            Total finishers
          </p>
          <p className="mt-2 font-serif text-3xl font-semibold text-me-ink">
            {totalSubscribers}
          </p>
        </div>
        {["Newcomer", "Curious Learner", "Ready Defender", "Living Library"].map((tier) => (
          <div
            key={tier}
            className="rounded-lg border border-border-main bg-white p-5"
          >
            <p className="text-xs font-semibold uppercase tracking-wider text-me-ink/50">
              {tier}
            </p>
            <p className="mt-2 font-serif text-3xl font-semibold text-me-ink">
              {counts[tier] || 0}
            </p>
          </div>
        ))}
      </div>

      {/* Leads table */}
      <div className="mt-8 overflow-hidden rounded-lg border border-border-main bg-white">
        <div className="border-b border-border-main bg-me-paper-alt/40 px-6 py-3">
          <p className="text-xs font-semibold uppercase tracking-widest text-me-ink/60">
            Recent quiz finishers (latest {leads.length})
          </p>
        </div>
        {leads.length === 0 ? (
          <div className="p-12 text-center">
            <p className="text-me-ink/60">
              No quiz finishers yet. Once someone completes the quiz with ConvertKit configured,
              they&apos;ll appear here.
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="border-b border-border-main bg-me-paper/40">
                <tr>
                  <th className="px-6 py-3 text-left font-semibold uppercase tracking-wider text-me-ink/60">
                    Email
                  </th>
                  <th className="px-6 py-3 text-left font-semibold uppercase tracking-wider text-me-ink/60">
                    Tier
                  </th>
                  <th className="px-6 py-3 text-left font-semibold uppercase tracking-wider text-me-ink/60">
                    Subscribed
                  </th>
                  <th className="px-6 py-3 text-left font-semibold uppercase tracking-wider text-me-ink/60">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border-main/70">
                {leads.map((lead) => {
                  const tier = tierFromTags(lead.tags);
                  const colors = TIER_COLORS[tier] || {
                    bg: "bg-me-paper-alt",
                    text: "text-me-ink",
                  };
                  return (
                    <tr key={lead.id} className="transition hover:bg-me-paper/50">
                      <td className="px-6 py-4 font-medium text-me-ink">{lead.email}</td>
                      <td className="px-6 py-4">
                        <span
                          className={`inline-block rounded-full ${colors.bg} ${colors.text} px-3 py-1 text-xs font-semibold`}
                        >
                          {tier}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-me-ink/70">
                        {formatDate(lead.createdAt)}
                      </td>
                      <td className="px-6 py-4 text-me-ink/70">
                        <span
                          className={
                            lead.state === "active"
                              ? "text-me-emerald"
                              : "text-me-ink/50"
                          }
                        >
                          {lead.state || "—"}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
