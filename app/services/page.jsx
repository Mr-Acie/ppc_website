import Link from "next/link";

export const metadata = {
  title: "Our Services",
  description:
    "Companion care, personalized assistance, three-tier technology education, and free cybersecurity training for seniors in Dayton, Ohio.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-navy py-20 text-white">
        <div className="mx-auto max-w-4xl px-6">
          <h1 className="font-serif text-4xl font-semibold sm:text-5xl">
            Our Services
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/80">
            Pampered Companion Care delivers a full spectrum of senior support
            &mdash; from daily in-home companionship to personalized technology
            coaching, workshops, customized digital courses, and free community
            fraud education.
          </p>
        </div>
      </section>

      {/* Companion Care */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="font-serif text-3xl font-semibold text-navy">
            Companion Care
          </h2>
          <p className="mt-4 leading-relaxed text-muted">
            Loneliness is one of the most serious health risks facing seniors
            today. Our companion care pairs each client with a caregiver who
            shows up consistently, listens genuinely, and brings warmth and
            purpose to every visit.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {[
              {
                title: "Conversation & Emotional Support",
                desc: "Meaningful conversation on topics the senior loves — family, history, hobbies, faith, or simply how their day is going.",
              },
              {
                title: "Activities & Engagement",
                desc: "Tailored activities by ability and interest — card games, puzzles, crafts, reading together, walking, gardening, music, and more.",
              },
              {
                title: "Medication & Routine Reminders",
                desc: "Friendly reminders for medications, hydration, meals, and daily routines — supporting independence without taking it away.",
              },
              {
                title: "Family Check-Ins & Peace of Mind",
                desc: "Regular updates so family always knows their loved one is safe, engaged, and in good hands — even from a distance.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="rounded border border-border-main bg-white p-6"
                style={{ borderTop: "3px solid #B8965A" }}
              >
                <h3 className="font-medium text-navy">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="mx-auto max-w-4xl border-border-main" />

      {/* Personalized Assistance */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="font-serif text-3xl font-semibold text-navy">
            Personalized Assistance
          </h2>
          <p className="mt-4 leading-relaxed text-muted">
            Our personalized assistance services are built around what each
            individual actually needs &mdash; not a one-size-fits-all checklist.
            We adapt to your loved one&rsquo;s schedule, preferences, and
            lifestyle.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {[
              {
                title: "Errands & Grocery Shopping",
                desc: "Grocery runs, pharmacy pickups, and daily errands — saving energy for what matters most.",
              },
              {
                title: "Appointment Accompaniment",
                desc: "Transportation to and attendance at medical, therapy, hair, and social appointments.",
              },
              {
                title: "Light Housekeeping Support",
                desc: "Help maintaining a clean, safe, and comfortable home — dishes, laundry, tidying, and organization.",
              },
              {
                title: "Technology Coaching",
                desc: "Hands-on help with smartphones, tablets, computers, and video calling — keeping seniors connected to family.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="rounded border border-border-main bg-white p-6"
                style={{ borderTop: "3px solid #B8965A" }}
              >
                <h3 className="font-medium text-navy">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="mx-auto max-w-4xl border-border-main" />

      {/* Three-Tier Technology Services */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="font-serif text-3xl font-semibold text-navy">
            Digital Empowerment &mdash; Three-Tier Technology Services
          </h2>
          <p className="mt-4 leading-relaxed text-muted">
            Not every senior starts in the same place with technology. Our
            structured, three-tier system meets each person exactly where they
            are. All sessions are in-home, at a comfortable pace, with zero
            judgment.
          </p>

          <div className="mt-8 grid gap-0 overflow-hidden rounded border border-border-main sm:grid-cols-3">
            {/* Tier 1 */}
            <div className="border-b border-border-main bg-white p-6 sm:border-b-0 sm:border-r" style={{ borderTop: "4px solid #2E7D52" }}>
              <span className="inline-block rounded bg-green-50 px-2.5 py-1 text-xs font-medium uppercase tracking-wider text-tier1">
                Tier 1 &mdash; Foundation
              </span>
              <h3 className="mt-3 text-lg font-medium text-tier1">
                Getting Comfortable with Technology
              </h3>
              <p className="mt-2 text-sm text-muted">
                For seniors brand new to digital devices or who feel overwhelmed.
                No experience needed.
              </p>
              <p className="mt-4 font-serif text-3xl font-semibold text-tier1">
                $45<span className="text-lg font-normal">/hr</span>
              </p>
              <p className="text-xs text-muted">
                or $160 for a 4-session starter package
              </p>
              <ul className="mt-4 space-y-1 text-sm text-muted">
                <li>Turning devices on/off, charging, navigation</li>
                <li>Making and receiving calls and texts</li>
                <li>Taking and sharing photos</li>
                <li>Setting up and using email</li>
                <li>Safe internet browsing</li>
                <li>Recognizing common digital scams</li>
              </ul>
            </div>

            {/* Tier 2 */}
            <div className="border-b border-border-main bg-white sm:border-b-0 sm:border-r" style={{ borderTop: "4px solid #1E5490" }}>
              <div className="bg-tier2 py-1.5 text-center text-xs font-medium uppercase tracking-wider text-white">
                Most Popular
              </div>
              <div className="p-6">
                <span className="inline-block rounded bg-blue-50 px-2.5 py-1 text-xs font-medium uppercase tracking-wider text-tier2">
                  Tier 2 &mdash; Confident User
                </span>
                <h3 className="mt-3 text-lg font-medium text-tier2">
                  Everyday Digital Independence
                </h3>
                <p className="mt-2 text-sm text-muted">
                  For seniors who know the basics and want to feel truly
                  confident with video calling, apps, and online safety.
                </p>
                <p className="mt-4 font-serif text-3xl font-semibold text-tier2">
                  $55<span className="text-lg font-normal">/hr</span>
                </p>
                <p className="text-xs text-muted">
                  or $200 for a 4-session confidence package
                </p>
                <ul className="mt-4 space-y-1 text-sm text-muted">
                  <li>Video calling (FaceTime, Zoom, WhatsApp)</li>
                  <li>Social media setup and safe use</li>
                  <li>Online shopping and account security</li>
                  <li>Health apps, reminders, calendars</li>
                  <li>Streaming services</li>
                  <li>Password management</li>
                  <li>Recognizing phishing and scam calls</li>
                </ul>
              </div>
            </div>

            {/* Tier 3 */}
            <div className="bg-white p-6" style={{ borderTop: "4px solid #7B3FA0" }}>
              <span className="inline-block rounded bg-purple-50 px-2.5 py-1 text-xs font-medium uppercase tracking-wider text-tier3">
                Tier 3 &mdash; Advanced Mastery
              </span>
              <h3 className="mt-3 text-lg font-medium text-tier3">
                Advanced Digital Skills &amp; Security
              </h3>
              <p className="mt-2 text-sm text-muted">
                For seniors comfortable day-to-day who want to master finances
                online, AI tools, and advanced security.
              </p>
              <p className="mt-4 font-serif text-3xl font-semibold text-tier3">
                $70<span className="text-lg font-normal">/hr</span>
              </p>
              <p className="text-xs text-muted">
                or $260 for a 4-session mastery package
              </p>
              <ul className="mt-4 space-y-1 text-sm text-muted">
                <li>Online banking and financial security</li>
                <li>Cloud storage, backups, file management</li>
                <li>Advanced privacy and two-factor auth</li>
                <li>Understanding AI tools</li>
                <li>Smart home device setup</li>
                <li>Full cybersecurity audit</li>
                <li>Independent troubleshooting</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 rounded border-l-4 border-tier2 bg-blue-50 p-5">
            <p className="text-sm text-navy">
              <strong>Not sure which tier is right?</strong> Call us at{" "}
              <a href="tel:3264673161" className="underline">
                (326) 467-3161
              </a>{" "}
              for a free 15-minute phone assessment. Seniors can move between
              tiers as their skills and confidence grow.
            </p>
          </div>
        </div>
      </section>

      <hr className="mx-auto max-w-4xl border-border-main" />

      {/* Fraud Protection */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="font-serif text-3xl font-semibold text-navy">
            Fraud &amp; Cybersecurity Education
          </h2>
          <span className="mt-2 inline-block rounded bg-green-50 px-3 py-1 text-xs font-medium uppercase tracking-wider text-green-700">
            100% Free &mdash; No Strings Attached
          </span>

          <div className="mt-6 rounded border-l-4 border-green-600 bg-green-50 p-5">
            <p className="text-sm text-navy">
              <strong>
                Protecting seniors from fraud and scams should never come with a
                price tag.
              </strong>{" "}
              Pampered Companion Care proudly offers free, in-person
              cybersecurity and scam awareness education throughout Dayton and
              Montgomery County.
            </p>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {[
              {
                title: "In-Home Fraud Education",
                desc: "One-on-one sessions covering the most common scams targeting seniors — phone fraud, phishing, fake tech support, grandparent scams, Medicare fraud, and more.",
              },
              {
                title: "Community & Group Presentations",
                desc: "Engaging presentations for senior centers, churches, community organizations, and assisted living facilities. We come to you, at no cost.",
              },
              {
                title: "Digital Safety Checkups",
                desc: "A hands-on review of a senior's devices, accounts, and online habits — identifying vulnerabilities and putting simple protections in place.",
              },
              {
                title: "Family Education Sessions",
                desc: "Sessions for adult children and family members so everyone understands how to recognize and respond to digital threats.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="rounded border border-border-main bg-white p-6"
                style={{ borderTop: "3px solid #B8965A" }}
              >
                <h3 className="font-medium text-navy">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="tel:3264673161"
              className="rounded bg-gold px-6 py-3 text-center text-sm font-medium text-white transition hover:bg-gold/90"
            >
              Schedule a Free Visit &mdash; (326) 467-3161
            </a>
            <a
              href="mailto:info@pamperedcompanioncare.com"
              className="rounded border border-navy px-6 py-3 text-center text-sm font-medium text-navy transition hover:bg-gold-light"
            >
              Request a Community Presentation
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
