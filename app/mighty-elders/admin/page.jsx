import { redirect } from "next/navigation";
import LeadsTable from "@/components/mighty-elders/LeadsTable";

export const metadata = {
  title: "Mighty Elders Admin",
  robots: { index: false, follow: false },
};

// Server component — gates with a token query param checked against
// MIGHTY_ELDERS_ADMIN_TOKEN. Until that's set, the page is unreachable.
export default async function MightyEldersAdminPage({ searchParams }) {
  const token = (searchParams?.token || "").toString();
  const expected = process.env.MIGHTY_ELDERS_ADMIN_TOKEN || "";

  // Hard-fail if no token configured (prevents accidental exposure).
  if (!expected) {
    return (
      <section className="bg-me-paper py-24">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h1 className="font-serif text-3xl font-semibold text-me-ink">
            Admin not configured
          </h1>
          <p className="mt-4 leading-relaxed text-me-ink/70">
            Set <code className="rounded bg-white px-2 py-1 text-sm">MIGHTY_ELDERS_ADMIN_TOKEN</code> in
            your Vercel environment variables to enable this page, then redeploy.
          </p>
          <p className="mt-3 text-sm text-me-ink/50">
            Then visit <code>/mighty-elders/admin?token=YOUR_TOKEN</code>.
          </p>
        </div>
      </section>
    );
  }

  if (token !== expected) {
    return (
      <section className="bg-me-paper py-24">
        <div className="mx-auto max-w-md px-6">
          <h1 className="font-serif text-3xl font-semibold text-me-ink">
            Mighty Elders Admin
          </h1>
          <p className="mt-3 text-me-ink/70">
            This page is restricted. Append your admin token to the URL:
          </p>
          <pre className="mt-4 overflow-x-auto rounded border border-border-main bg-white p-4 text-xs text-me-ink/80">
            /mighty-elders/admin?token=YOUR_TOKEN
          </pre>
        </div>
      </section>
    );
  }

  // Authorized — render the dashboard.
  return (
    <section className="bg-me-paper py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-2 border-b border-border-main pb-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-me-accent">
              Mighty Elders · Admin
            </p>
            <h1 className="mt-2 font-serif text-3xl font-semibold text-me-ink sm:text-4xl">
              Quiz Finishers Dashboard
            </h1>
            <p className="mt-2 text-sm text-me-ink/60">
              Live view of recent quiz completions. Data pulled from ConvertKit.
            </p>
          </div>
          <a
            href={`/mighty-elders/admin?token=${encodeURIComponent(token)}`}
            className="self-start rounded border border-me-primary px-4 py-2 text-sm font-medium text-me-primary transition hover:bg-me-paper-alt"
          >
            Refresh
          </a>
        </div>

        <div className="mt-8">
          <LeadsTable token={token} />
        </div>

        <div className="mt-12 rounded-lg border border-border-main bg-white p-6">
          <h2 className="font-serif text-lg font-semibold text-me-ink">
            How to use this page
          </h2>
          <ul className="mt-3 space-y-2 text-sm leading-relaxed text-me-ink/75">
            <li>
              <strong>Source of truth:</strong> All data here comes live from ConvertKit.
              For the canonical view, log into{" "}
              <a
                href="https://app.kit.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-me-primary underline-offset-4 hover:underline"
              >
                app.kit.com
              </a>
              .
            </li>
            <li>
              <strong>Tier tags:</strong> me-tier-newcomer, me-tier-curious-learner,
              me-tier-ready-defender, me-tier-living-library.
            </li>
            <li>
              <strong>Privacy:</strong> Don&apos;t share the URL above &mdash; the token
              is the only thing keeping this page private. Rotate it in Vercel env vars if
              it leaks.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
