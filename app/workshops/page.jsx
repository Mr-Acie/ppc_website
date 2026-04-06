export const metadata = {
  title: "Workshops & Group Learning",
  description:
    "Practical technology education and cybersecurity workshops for seniors at community centers, churches, and organizations in Dayton, Ohio.",
};

const workshops = [
  {
    title: "Smartphone & Tablet Basics",
    tier: "Tier 1",
    tierColor: "bg-green-50 text-tier1",
    desc: "A hands-on introduction to smartphones and tablets for seniors with no prior experience. Covers device basics, calling, texting, photos, and email in a step-by-step, judgment-free setting.",
    meta: "Duration: 2 hours · Group size: up to 12 · Bring your own device or use ours",
    price: "$150",
    priceLabel: "per session",
  },
  {
    title: "Staying Connected — Video Calls, Social Media & Apps",
    tier: "Tier 2",
    tierColor: "bg-blue-50 text-tier2",
    desc: "Focused on keeping seniors connected to family and community. Covers FaceTime, Zoom, WhatsApp, Facebook basics, photo sharing, and everyday apps. Attendees leave able to video call a family member the same day.",
    meta: "Duration: 2 hours · Group size: up to 12 · Bring your own device",
    price: "$150",
    priceLabel: "per session",
  },
  {
    title: "Online Safety & Fraud Prevention",
    tier: "Always Free",
    tierColor: "bg-green-50 text-green-700",
    desc: "Our flagship community workshop. Covers phone scams, email phishing, fake tech support calls, grandparent scams, Medicare fraud, romance scams, and practical steps to protect against each.",
    meta: "Duration: 1.5–2 hours · Any group size · No devices required",
    price: "FREE",
    priceLabel: "always",
    priceColor: "text-green-700",
  },
  {
    title: "Online Banking & Account Security",
    tier: "Tier 3",
    tierColor: "bg-purple-50 text-tier3",
    desc: "A thorough, practical session on managing finances safely online. Covers account setup, secure login practices, two-factor authentication, spotting financial fraud, and understanding bank alerts.",
    meta: "Duration: 2 hours · Group size: up to 10 · Bring your own device",
    price: "$175",
    priceLabel: "per session",
  },
  {
    title: "Half-Day Digital Empowerment Intensive",
    tier: null,
    desc: "A comprehensive four-hour experience combining Tier 1 and Tier 2 content — ideal for assisted living facilities or senior centers. Includes a printed take-home reference guide.",
    meta: "Duration: 4 hours · Group size: up to 15 · Includes printed materials",
    price: "$350",
    priceLabel: "per session",
  },
  {
    title: "Full-Day Senior Tech Day",
    tier: null,
    desc: "A full-day event covering all three technology tiers plus fraud prevention — perfect for large senior centers, community events, and organizational programming. Includes three rotating workshops, break time, and one-on-one device support.",
    meta: "Duration: 6 hours · Group size: 20+ · Includes printed materials & 1:1 support",
    price: "$600",
    priceLabel: "per event",
  },
];

export default function WorkshopsPage() {
  return (
    <>
      <section className="bg-navy py-20 text-white">
        <div className="mx-auto max-w-4xl px-6">
          <h1 className="font-serif text-4xl font-semibold sm:text-5xl">
            Workshops &amp; Group Learning
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/80">
            Our workshops bring practical technology education and cybersecurity
            training directly to your community &mdash; in a relaxed,
            judgment-free environment where every question is welcome.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6">
          <p className="text-muted">
            We offer workshops at senior centers, churches, libraries, assisted
            living facilities, community organizations, and businesses throughout
            Dayton and Montgomery County. Group sessions are available in
            half-day and full-day formats, and every workshop can be customized
            for your audience.
          </p>

          <hr className="my-12 border-border-main" />

          <h2 className="font-serif text-3xl font-semibold text-navy">
            Workshop Menu &amp; Pricing
          </h2>
          <p className="mt-3 text-sm text-muted">
            All prices are per session. Group size, location, and travel distance
            may affect final pricing.{" "}
            <strong className="text-navy">
              Fraud &amp; Scam Awareness workshops are always free of charge.
            </strong>
          </p>

          <div className="mt-8 space-y-4">
            {workshops.map((w) => (
              <div
                key={w.title}
                className="grid items-start gap-4 rounded border border-border-main bg-white p-6 sm:grid-cols-[1fr_auto]"
              >
                <div>
                  <p className="font-medium text-navy">
                    {w.title}
                    {w.tier && (
                      <span
                        className={`ml-2 inline-block rounded px-2 py-0.5 text-xs font-medium uppercase tracking-wider ${w.tierColor}`}
                      >
                        {w.tier}
                      </span>
                    )}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {w.desc}
                  </p>
                  <p className="mt-2 text-xs text-muted">{w.meta}</p>
                </div>
                <div className="text-right sm:text-right">
                  <span
                    className={`font-serif text-3xl font-semibold ${w.priceColor || "text-navy"}`}
                  >
                    {w.price}
                  </span>
                  <br />
                  <span className="text-xs text-muted">{w.priceLabel}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded border-l-4 border-tier2 bg-blue-50 p-5">
            <p className="text-sm text-navy">
              <strong>All workshop pricing is based on the Dayton, Ohio market.</strong>{" "}
              Comparable sessions in the region are priced $125&ndash;$200. Our
              pricing reflects 30+ years of experience and military-grade
              cybersecurity expertise. Discounts available for non-profit
              organizations and recurring bookings.
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="tel:3264673161"
              className="rounded bg-gold px-6 py-3 text-center text-sm font-medium text-white transition hover:bg-gold/90"
            >
              Book a Workshop &mdash; (326) 467-3161
            </a>
            <a
              href="mailto:info@pamperedcompanioncare.com"
              className="rounded border border-navy px-6 py-3 text-center text-sm font-medium text-navy transition hover:bg-gold-light"
            >
              Request a Custom Quote
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
