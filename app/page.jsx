import Link from "next/link";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://pamperedcompanioncare.org";

// Service-level structured data for the homepage
const homeServiceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Genius Bar for Seniors — Technology, AI & Companion Care",
  provider: { "@id": `${SITE_URL}/#business` },
  areaServed: "Dayton & Montgomery County, Ohio",
  description:
    "One-on-one Genius Bar–style help for seniors: smartphones, computers, AI tools, cybersecurity, and warm companion care.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    description: "Free 20-minute phone consultation",
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeServiceJsonLd) }}
      />

      {/* Hero */}
      <section className="bg-navy py-24 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-gold">
            Dayton, Ohio · Serving Montgomery County
          </p>
          <h1 className="font-serif text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
            A Genius Bar for Seniors —
            <br />
            Patient Tech, AI &amp; Companion Care
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
            One-on-one help with smartphones, computers, and AI tools, plus warm
            in-home companionship and free cybersecurity training for older
            adults in Dayton &amp; Montgomery County, Ohio.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="rounded bg-gold px-8 py-3.5 text-base font-semibold text-white transition hover:bg-gold/90"
            >
              Book a Free Consultation
            </Link>
            <a
              href="tel:3264673161"
              className="rounded border border-white/30 px-8 py-3.5 text-base font-medium text-white transition hover:bg-white/10"
            >
              Call (326) 467-3161
            </a>
          </div>
          <p className="mt-4 text-sm text-white/60">
            No pressure, no obligation · 20-minute call
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-border-main bg-white">
        <div className="mx-auto grid max-w-4xl grid-cols-2 divide-x divide-border-main sm:grid-cols-4">
          {[
            { num: "30+", desc: "Years serving Dayton seniors" },
            { num: "8", desc: "Years U.S. Air Force security expertise" },
            { num: "3", desc: "Technology service tiers" },
            { num: "Free", desc: "Cybersecurity & fraud education" },
          ].map((stat) => (
            <div key={stat.desc} className="px-4 py-8 text-center">
              <span className="font-serif text-4xl font-semibold text-gold">
                {stat.num}
              </span>
              <p className="mt-2 text-xs text-muted">{stat.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Care intro */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="font-serif text-3xl font-semibold text-navy">
            The Dayton Genius Bar Built Around Seniors
          </h2>
          <p className="mt-4 leading-relaxed text-muted">
            Big-box tech stores feel rushed, intimidating, and impersonal.
            Pampered Companion Care is different: a calm, one-on-one help desk
            for seniors that combines patient technology and AI coaching with
            real human companionship — delivered in your home, at your senior
            center, or at your church across Dayton and Montgomery County.
          </p>
          <p className="mt-4 leading-relaxed text-muted">
            We are not a national franchise. We are a Dayton-born,
            community-rooted business built on a lifetime of service, guided by
            one belief:{" "}
            <strong className="text-navy">
              every senior in our community deserves to be safe, connected, and
              treated with the dignity they have earned.
            </strong>
          </p>
        </div>
      </section>

      {/* Services overview */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="font-serif text-3xl font-semibold text-navy">
            How We Help Seniors With Technology &amp; AI
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {[
              {
                icon: "📱",
                title: "Smartphone &amp; Computer Help",
                desc: "Patient one-on-one tech support — texting, FaceTime, email, Wi-Fi, printers, password resets, and everything in between.",
              },
              {
                icon: "🤖",
                title: "AI Coaching for Seniors",
                desc: "Learn to use ChatGPT, voice assistants, and AI tools safely and confidently — for writing, health questions, recipes, photos, and more.",
              },
              {
                icon: "🛡️",
                title: "Fraud &amp; Scam Protection",
                desc: "Free in-person cybersecurity education brought to your home, senior center, church, or community organization across Dayton.",
                free: true,
              },
              {
                icon: "🤝",
                title: "Companion Care",
                desc: "Warm, in-home companionship that combats loneliness — conversation, shared activities, errands, and gentle encouragement.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded border border-border-main bg-cream p-6"
                style={{ borderTop: "3px solid #B8965A" }}
              >
                <span className="text-2xl" aria-hidden="true">
                  {item.icon}
                </span>
                <h3
                  className="mt-3 font-medium text-navy"
                  dangerouslySetInnerHTML={{ __html: item.title }}
                />
                {item.free && (
                  <span className="mt-1 inline-block rounded bg-green-50 px-2 py-0.5 text-xs font-medium uppercase tracking-wider text-green-700">
                    Always Free
                  </span>
                )}
                <p
                  className="mt-2 text-sm leading-relaxed text-muted"
                  dangerouslySetInnerHTML={{ __html: item.desc }}
                />
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/services"
              className="inline-block rounded border border-navy px-6 py-3 text-sm font-medium text-navy transition hover:bg-navy hover:text-white"
            >
              See All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonial callout */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6">
          <div className="rounded border-l-4 border-gold bg-gold-light p-6">
            <p className="text-navy">
              &ldquo;Pampered Companion Care made a profound difference in my
              mother&rsquo;s life. The caregivers are kind, attentive, and truly
              treat her with the respect and warmth she deserves.&rdquo;
            </p>
            <p className="mt-3 text-sm font-medium text-navy">
              &mdash; Sarah K., Dayton
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-20 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="font-serif text-3xl font-semibold">
            Book a Free Consultation Today
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/80">
            Whether you&rsquo;re looking for ongoing companion care, a one-time
            tech or AI session, a community fraud prevention talk, or a
            customized digital skills course &mdash; we&rsquo;re here. No
            pressure, no obligation.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="rounded bg-gold px-8 py-3.5 font-semibold text-white transition hover:bg-gold/90"
            >
              Book Free Consultation
            </Link>
            <a
              href="tel:3264673161"
              className="rounded border border-white/30 px-8 py-3.5 font-medium text-white transition hover:bg-white/10"
            >
              Call (326) 467-3161
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
