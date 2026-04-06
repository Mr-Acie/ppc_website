import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-24 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h1 className="font-serif text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
            Dayton&rsquo;s Most Trusted
            <br />
            Senior Companion Care
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
            We bring compassionate in-home companionship, personalized daily
            support, and free cybersecurity education to seniors across Dayton
            and Montgomery County &mdash; because every older adult deserves
            safety, dignity, and connection.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="tel:3264673161"
              className="rounded bg-gold px-8 py-3.5 text-base font-medium text-white transition hover:bg-gold/90"
            >
              Call (326) 467-3161
            </a>
            <Link
              href="/services"
              className="rounded border border-white/30 px-8 py-3.5 text-base font-medium text-white transition hover:bg-white/10"
            >
              See Our Services
            </Link>
          </div>
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
            Care That Looks Out for the Whole Person
          </h2>
          <p className="mt-4 leading-relaxed text-muted">
            At Pampered Companion Care, we believe senior care should go beyond
            checking boxes. It should protect, uplift, and genuinely connect.
            That&rsquo;s why we are the only companion care service in the
            Dayton area that combines warm, in-home companionship with a full
            three-tier technology education program and hands-on cybersecurity
            training &mdash; keeping seniors safe from both daily challenges and
            the growing threat of digital fraud.
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
            What We Offer
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {[
              {
                icon: "🤝",
                title: "Companion Care",
                desc: "Meaningful companionship that combats loneliness and brightens every day — from heartfelt conversation to shared activities and gentle encouragement.",
              },
              {
                icon: "📱",
                title: "Digital Empowerment — 3 Tiers",
                desc: "From first-time smartphone setup to advanced digital independence — our three-tier technology education system meets every senior exactly where they are.",
              },
              {
                icon: "🛡️",
                title: "Fraud & Scam Protection",
                desc: "In-person cybersecurity education brought directly to your home, senior center, church, or community organization throughout Dayton and Montgomery County.",
                free: true,
              },
              {
                icon: "⭐",
                title: "Personalized Assistance",
                desc: "Tailored support for daily living — errands, appointments, technology coaching, and more — always built around individual preferences and pace.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded border border-border-main bg-cream p-6"
                style={{ borderTop: "3px solid #B8965A" }}
              >
                <span className="text-2xl">{item.icon}</span>
                <h3 className="mt-3 font-medium text-navy">{item.title}</h3>
                {item.free && (
                  <span className="mt-1 inline-block rounded bg-green-50 px-2 py-0.5 text-xs font-medium uppercase tracking-wider text-green-700">
                    Always Free
                  </span>
                )}
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {item.desc}
                </p>
              </div>
            ))}
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
            Serving Dayton &amp; Montgomery County, Ohio
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/80">
            Whether you&rsquo;re looking for ongoing companion care, a one-time
            technology session, a community fraud prevention presentation, or a
            fully customized digital skills course &mdash; we are here. Call us
            for a free consultation with no pressure and no obligation.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="mailto:info@pamperedcompanioncare.com"
              className="rounded bg-gold px-8 py-3.5 font-medium text-white transition hover:bg-gold/90"
            >
              Get in Touch
            </a>
            <Link
              href="/faq"
              className="rounded border border-white/30 px-8 py-3.5 font-medium text-white transition hover:bg-white/10"
            >
              Read Our FAQs
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
