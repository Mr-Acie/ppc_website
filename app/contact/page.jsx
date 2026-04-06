export const metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Pampered Companion Care. Call (326) 467-3161 or email info@pamperedcompanioncare.com. Serving Dayton & Montgomery County, Ohio.",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-navy py-20 text-white">
        <div className="mx-auto max-w-4xl px-6">
          <h1 className="font-serif text-4xl font-semibold sm:text-5xl">
            Get In Touch
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/80">
            Whether you have questions about our services, want to schedule a
            free consultation, or need to book a workshop &mdash; we&rsquo;d
            love to hear from you.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                label: "Phone",
                value: "(326) 467-3161",
                href: "tel:3264673161",
              },
              {
                label: "Email",
                value: "info@pamperedcompanioncare.com",
                href: "mailto:info@pamperedcompanioncare.com",
              },
              {
                label: "Service Area",
                value: "Dayton & Montgomery County, OH",
              },
              {
                label: "Hours",
                value: "Mon–Fri, 9 AM – 5 PM",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded border border-border-main bg-white p-5"
              >
                <p className="text-xs font-medium uppercase tracking-widest text-gold">
                  {item.label}
                </p>
                {item.href ? (
                  <a
                    href={item.href}
                    className="mt-2 block font-medium text-navy transition hover:text-gold"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="mt-2 font-medium text-navy">{item.value}</p>
                )}
              </div>
            ))}
          </div>

          <hr className="my-16 border-border-main" />

          <div className="grid gap-12 lg:grid-cols-2">
            {/* What to expect */}
            <div>
              <h2 className="font-serif text-2xl font-semibold text-navy">
                What to Expect
              </h2>
              <div className="mt-6 space-y-6">
                {[
                  {
                    num: "01",
                    title: "Call or Email",
                    desc: "Reach out by phone or email. We'll respond within one business day.",
                  },
                  {
                    num: "02",
                    title: "Free Consultation",
                    desc: "A no-obligation conversation about your loved one's needs, goals, and situation.",
                  },
                  {
                    num: "03",
                    title: "Personalized Plan",
                    desc: "We'll recommend the right services, schedule, and approach — tailored to the individual.",
                  },
                  {
                    num: "04",
                    title: "Get Started",
                    desc: "Begin with companion care, a technology session, a workshop, or a customized course.",
                  },
                ].map((step) => (
                  <div key={step.num} className="flex gap-4">
                    <span className="flex-shrink-0 font-serif text-2xl font-semibold text-gold">
                      {step.num}
                    </span>
                    <div>
                      <h3 className="font-medium text-navy">{step.title}</h3>
                      <p className="mt-1 text-sm text-muted">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA block */}
            <div className="flex flex-col justify-center rounded bg-navy p-8 text-white">
              <h2 className="font-serif text-2xl font-semibold">
                Ready to Talk?
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-white/80">
                No pressure. No obligation. Just an honest conversation about
                how we can help your loved one feel safer, more connected, and
                more confident.
              </p>
              <div className="mt-6 flex flex-col gap-3">
                <a
                  href="tel:3264673161"
                  className="rounded bg-gold px-6 py-3 text-center text-sm font-medium text-white transition hover:bg-gold/90"
                >
                  Call (326) 467-3161
                </a>
                <a
                  href="mailto:info@pamperedcompanioncare.com"
                  className="rounded border border-white/30 px-6 py-3 text-center text-sm font-medium text-white transition hover:bg-white/10"
                >
                  Email Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
