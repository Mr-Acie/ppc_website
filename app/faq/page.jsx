import Link from "next/link";

export const metadata = {
  title: "Frequently Asked Questions",
  description:
    "Answers to common questions about companion care, technology services, workshops, courses, and free fraud education from Pampered Companion Care.",
};

const faqSections = [
  {
    heading: "About Companion Care",
    items: [
      {
        q: "What is companion care, and is it the same as home health care?",
        a: "Companion care focuses on social engagement, emotional support, and help with daily life tasks — it is not medical care. We provide meaningful human connection, errand help, appointment accompaniment, technology assistance, and the kind of consistent, trustworthy presence that makes a real difference in a senior's well-being.",
      },
      {
        q: "How much does companion care cost?",
        a: "Companion care in Dayton averages $28–$35 per hour based on 2026 market data. Our rates are competitive within that range and are discussed transparently during the free consultation. There are no surprise fees. Contact us for current pricing specific to the type and frequency of care needed.",
      },
      {
        q: "Will my loved one have the same caregiver each time?",
        a: "Yes — consistency is a core part of our approach. We make a thoughtful match between client and caregiver and work hard to keep that relationship stable. Trust builds over time, and we take that seriously.",
      },
    ],
  },
  {
    heading: "About the Three-Tier Technology Services",
    items: [
      {
        q: "How do I know which tier is right for my loved one?",
        a: "Call us for a free 15-minute phone assessment. We'll ask a few simple questions about the senior's current comfort with devices and their goals, then recommend the right starting tier. Most seniors start at Tier 1 or Tier 2. There is no pressure to move quickly.",
      },
      {
        q: "Can a senior move between tiers as their skills improve?",
        a: "Absolutely — and that is the goal. Our three-tier system is designed as a progression. As a senior builds confidence and skills, they naturally advance to the next level. We guide that progression and never rush it.",
      },
      {
        q: "What is the difference between a one-on-one session and a customized course?",
        a: "One-on-one sessions are ideal for immediate help, specific questions, or occasional support. A customized course is a structured multi-session program with a designed lesson plan, printed take-home guides, and a clear progression toward specific goals. Courses offer better value per session and more measurable outcomes.",
      },
    ],
  },
  {
    heading: "About Workshops & Customized Courses",
    items: [
      {
        q: "Can you come to our senior center or church for a workshop?",
        a: "Yes — and we would love to. We bring workshops to senior centers, churches, libraries, assisted living facilities, and community organizations throughout Dayton and Montgomery County. The fraud prevention workshop is always free. Other workshops start at $150. Contact us to book.",
      },
      {
        q: "How long does a customized course take to complete?",
        a: "That depends on the package and schedule. A 4-session Starter Course can be completed in a month at one session per week. A 12-session Full Journey Course typically runs 10–12 weeks. We always adapt to the individual's pace.",
      },
      {
        q: "What is included in the printed guides?",
        a: "Printed guides are written in large, easy-to-read text with step-by-step instructions, screenshots of real screens, and plain-language explanations — no tech jargon. Seniors can reference them anytime between sessions.",
      },
      {
        q: "Do you offer discounts for non-profit organizations?",
        a: "Yes. We offer reduced-rate workshop and organizational curriculum pricing for registered non-profit organizations, senior centers, and faith communities. Contact us to discuss options.",
      },
    ],
  },
  {
    heading: "About the Free Fraud Education",
    items: [
      {
        q: "Is the fraud and cybersecurity education really free?",
        a: "Yes — completely and genuinely free. No hidden fees, no upselling, no obligation to sign up for any other service. We offer this because protecting seniors from digital fraud is the right thing to do.",
      },
      {
        q: "My parent already got scammed. Can you still help?",
        a: "Yes. We help seniors who have already been victimized understand what happened, how to respond, and how to protect themselves going forward — with complete compassion and zero judgment.",
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <>
      <section className="bg-navy py-20 text-white">
        <div className="mx-auto max-w-4xl px-6">
          <h1 className="font-serif text-4xl font-semibold sm:text-5xl">
            Frequently Asked Questions
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/80">
            We know choosing care or a technology course for a loved one comes
            with many questions. Here are honest answers to the ones we hear most
            often.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6">
          {faqSections.map((section) => (
            <div key={section.heading} className="mb-12 last:mb-0">
              <h2 className="font-serif text-2xl font-semibold text-navy">
                {section.heading}
              </h2>
              <div className="mt-6 space-y-0 divide-y divide-border-main">
                {section.items.map((faq) => (
                  <div key={faq.q} className="py-5">
                    <p className="font-medium text-navy">{faq.q}</p>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {faq.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div className="mt-12 flex flex-col gap-4 sm:flex-row">
            <a
              href="tel:3264673161"
              className="rounded bg-gold px-6 py-3 text-center text-sm font-medium text-white transition hover:bg-gold/90"
            >
              Call Us &mdash; (326) 467-3161
            </a>
            <a
              href="mailto:info@pamperedcompanioncare.com"
              className="rounded border border-navy px-6 py-3 text-center text-sm font-medium text-navy transition hover:bg-gold-light"
            >
              Send an Email
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
