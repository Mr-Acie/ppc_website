export const metadata = {
  title: "Customized Technology Courses",
  description:
    "Structured, multi-session digital education programs tailored for seniors. From smartphone basics to advanced digital mastery in Dayton, Ohio.",
};

const packages = [
  {
    name: "Starter Course",
    tier: "Tier 1 focus",
    sessions: "4 sessions",
    sessionNote: "1 hr each",
    bestFor:
      "Seniors brand new to technology who need a gentle, structured introduction over 4 weeks.",
    price: "$160",
  },
  {
    name: "Confidence Course",
    tier: "Tier 1–2 blend",
    sessions: "6 sessions",
    sessionNote: "1 hr each",
    bestFor:
      "Seniors who know the very basics and want to build real day-to-day independence with their devices.",
    price: "$240",
  },
  {
    name: "Independence Course",
    tier: "Tier 2 focus",
    sessions: "8 sessions",
    sessionNote: "1 hr each",
    bestFor:
      "Seniors ready to master video calls, apps, online shopping, health tools, and safe social media use.",
    price: "$320",
  },
  {
    name: "Mastery Course",
    tier: "Tier 2–3 blend",
    sessions: "10 sessions",
    sessionNote: "1 hr each",
    bestFor:
      "Seniors comfortable day-to-day who want to advance to online banking, advanced security, cloud storage, and AI tools.",
    price: "$390",
  },
  {
    name: "Full Journey Course",
    tier: "All 3 tiers",
    sessions: "12 sessions",
    sessionNote: "1 hr each",
    bestFor:
      "The complete experience — from device basics to advanced digital mastery. Includes printed guides for every module.",
    price: "$450",
  },
  {
    name: "Organizational Curriculum",
    tier: "Senior centers & facilities",
    sessions: "Custom",
    sessionNote: "Group format",
    bestFor:
      "A fully designed group curriculum for assisted living facilities, senior centers, or community organizations. Includes facilitator guides and printed materials.",
    price: "From $500",
  },
];

const steps = [
  {
    num: "01",
    title: "Free Needs Assessment",
    desc: "We start with a 30-minute call or in-person visit to understand the senior's current comfort level, devices, goals, and any specific challenges. No charge, no commitment.",
  },
  {
    num: "02",
    title: "Course Design",
    desc: "We design a custom lesson plan based on that assessment — choosing the right tier(s), sequence of topics, and pacing. We share the plan with the family for input before starting.",
  },
  {
    num: "03",
    title: "In-Home Sessions",
    desc: "Sessions are delivered in the senior's home on a schedule that works for them. Every session ends with a simple practice task they can do on their own.",
  },
  {
    num: "04",
    title: "Printed Guides & Ongoing Support",
    desc: "Each module comes with a printed, easy-to-read reference guide. Between sessions, seniors can call or text us with quick questions.",
  },
  {
    num: "05",
    title: "Completion & Follow-Up",
    desc: "At the end of the course, we conduct a final review session and a 2-week follow-up call to make sure the learning has stuck.",
  },
];

export default function CoursesPage() {
  return (
    <>
      <section className="bg-navy py-20 text-white">
        <div className="mx-auto max-w-4xl px-6">
          <h1 className="font-serif text-4xl font-semibold sm:text-5xl">
            Customized Technology Courses
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/80">
            Every senior&rsquo;s learning journey is different. Our customized
            course program lets individuals, families, and organizations build a
            structured, multi-session digital education experience tailored to
            specific goals.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="font-serif text-3xl font-semibold text-navy">
            What Makes a Course &ldquo;Customized&rdquo;?
          </h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Tailored Content",
                desc: "Every lesson is built around the senior's actual devices, specific apps, and real-life goals.",
              },
              {
                title: "Flexible Pacing",
                desc: "Sessions scheduled weekly, twice weekly, or monthly. Lessons build logically so nothing feels rushed.",
              },
              {
                title: "Printed Take-Home Guides",
                desc: "Step-by-step reference guides in plain language so seniors can practice between sessions.",
              },
              {
                title: "Family Coordination",
                desc: "We keep family members informed of progress and can design sessions around specific family connections.",
              },
              {
                title: "Progress Tracking",
                desc: "We document what each senior has learned, helping families understand growth and giving seniors a sense of achievement.",
              },
              {
                title: "Security Built In",
                desc: "Every course includes age-appropriate cybersecurity education woven throughout.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="rounded border border-border-main bg-white p-5"
                style={{ borderTop: "3px solid #B8965A" }}
              >
                <h3 className="font-medium text-navy">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>

          <hr className="my-16 border-border-main" />

          {/* Pricing table */}
          <h2 className="font-serif text-3xl font-semibold text-navy">
            Customized Course Pricing
          </h2>
          <p className="mt-3 text-sm text-muted">
            Pricing based on Dayton-area market rates. Comparable private
            technology coaching ranges from $40&ndash;$85/hour.
          </p>

          <div className="mt-8 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-navy text-left text-xs font-medium uppercase tracking-wider text-white">
                  <th className="px-4 py-3">Package</th>
                  <th className="px-4 py-3">Sessions</th>
                  <th className="px-4 py-3">Best For</th>
                  <th className="px-4 py-3">Price</th>
                </tr>
              </thead>
              <tbody>
                {packages.map((pkg, i) => (
                  <tr
                    key={pkg.name}
                    className={i % 2 === 0 ? "bg-cream" : "bg-white"}
                  >
                    <td className="px-4 py-3 align-top">
                      <strong className="text-navy">{pkg.name}</strong>
                      <br />
                      <span className="text-xs text-muted">{pkg.tier}</span>
                    </td>
                    <td className="px-4 py-3 align-top">
                      {pkg.sessions}
                      <br />
                      <span className="text-xs text-muted">
                        {pkg.sessionNote}
                      </span>
                    </td>
                    <td className="px-4 py-3 align-top text-muted">
                      {pkg.bestFor}
                    </td>
                    <td className="whitespace-nowrap px-4 py-3 align-top font-serif text-xl font-semibold text-navy">
                      {pkg.price}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 rounded border-l-4 border-gold bg-gold-light p-5">
            <p className="text-sm text-navy">
              <strong>All packages include:</strong> a free 30-minute needs
              assessment, printed take-home reference guides, progress notes
              shared with family (with permission), and a follow-up check-in
              call 2 weeks after the final session.
            </p>
          </div>

          <div className="mt-4 rounded border-l-4 border-tier2 bg-blue-50 p-5">
            <p className="text-sm text-navy">
              <strong>How our pricing compares:</strong> Private technology
              tutoring for seniors in Ohio ranges from $40&ndash;$85/hour. Our
              per-session rate within packages works out to $37&ndash;$45
              &mdash; below market average &mdash; because we believe ongoing
              digital education should be accessible.
            </p>
          </div>

          <hr className="my-16 border-border-main" />

          {/* Process */}
          <h2 className="font-serif text-3xl font-semibold text-navy">
            How the Customized Course Process Works
          </h2>
          <div className="mt-8 space-y-8">
            {steps.map((step) => (
              <div key={step.num} className="flex gap-5">
                <span className="flex-shrink-0 font-serif text-3xl font-semibold text-gold">
                  {step.num}
                </span>
                <div>
                  <h3 className="font-medium text-navy">{step.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-col gap-4 sm:flex-row">
            <a
              href="tel:3264673161"
              className="rounded bg-gold px-6 py-3 text-center text-sm font-medium text-white transition hover:bg-gold/90"
            >
              Start with a Free Assessment
            </a>
            <a
              href="mailto:info@pamperedcompanioncare.com"
              className="rounded border border-navy px-6 py-3 text-center text-sm font-medium text-navy transition hover:bg-gold-light"
            >
              Ask About Organizational Courses
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
