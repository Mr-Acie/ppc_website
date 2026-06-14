import AppointmentForm from "@/components/AppointmentForm";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://pamperedcompanioncare.org";

export const metadata = {
  title: "Book an Appointment — Senior Tech, AI & Companion Care in Dayton",
  description:
    "Book a free 20-minute phone consultation, an in-home tech & AI session, or a community workshop with Pampered Companion Care in Dayton, Ohio.",
  alternates: { canonical: "/book" },
  openGraph: {
    title: "Book an Appointment — Pampered Companion Care",
    description:
      "Free 20-minute phone consultations, in-home tech & AI coaching, and community workshops in Dayton, Ohio.",
    url: "/book",
  },
};

const reservationJsonLd = {
  "@context": "https://schema.org",
  "@type": "ReserveAction",
  name: "Book an appointment with Pampered Companion Care",
  target: {
    "@type": "EntryPoint",
    urlTemplate: `${SITE_URL}/book`,
    actionPlatform: [
      "http://schema.org/DesktopWebPlatform",
      "http://schema.org/MobileWebPlatform",
    ],
  },
  result: {
    "@type": "Reservation",
    name: "Appointment request",
  },
  provider: { "@id": `${SITE_URL}/#business` },
};

const reassurance = [
  {
    icon: "💬",
    title: "No pressure, no obligation",
    desc: "Every booking starts with a friendly call — never a sales script.",
  },
  {
    icon: "⏰",
    title: "Quick callback",
    desc: "We respond within one business day, usually much sooner.",
  },
  {
    icon: "🛡️",
    title: "Patient & senior-friendly",
    desc: "Plain language, no tech jargon, all the time you need.",
  },
];

export default function BookPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reservationJsonLd) }}
      />

      {/* Hero */}
      <section className="bg-navy py-20 text-white">
        <div className="mx-auto max-w-4xl px-6">
          <p className="text-sm font-medium uppercase tracking-widest text-gold">
            Book An Appointment
          </p>
          <h1 className="mt-3 font-serif text-4xl font-semibold sm:text-5xl">
            Let&rsquo;s pick a time that works for you.
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/80">
            Tell us a little about what you need and the best time to reach
            you. We&rsquo;ll call you back personally within one business day to
            confirm your appointment — no pressure, no obligation.
          </p>
        </div>
      </section>

      {/* Reassurance strip */}
      <section className="border-b border-border-main bg-white">
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 px-6 py-10 sm:grid-cols-3">
          {reassurance.map((item) => (
            <div key={item.title} className="flex gap-3">
              <span className="text-2xl" aria-hidden="true">
                {item.icon}
              </span>
              <div>
                <p className="font-medium text-navy">{item.title}</p>
                <p className="mt-1 text-sm text-muted">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Form */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6">
          <div className="rounded border border-border-main bg-white p-6 shadow-sm sm:p-10">
            <AppointmentForm />
          </div>
        </div>
      </section>

      {/* Alternate contact */}
      <section className="bg-cream py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="font-serif text-2xl font-semibold text-navy">
            Prefer to call us directly?
          </h2>
          <p className="mt-2 text-muted">
            We&rsquo;re here Monday through Friday, 9 AM to 5 PM Eastern.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="tel:3264673161"
              className="rounded bg-gold px-8 py-3.5 font-semibold text-white transition hover:bg-gold/90"
            >
              Call (326) 467-3161
            </a>
            <a
              href="mailto:info@pamperedcompanioncare.com"
              className="rounded border border-navy px-8 py-3.5 font-medium text-navy transition hover:bg-gold-light"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
