import Link from "next/link";

export const metadata = {
  title: "Testimonials",
  description:
    "What Dayton families are saying about Pampered Companion Care — stories of connection, confidence, and genuine care.",
};

const testimonials = [
  {
    text: "Pampered Companion Care made a profound difference in my mother's life. The caregivers are kind, attentive, and truly treat her with the respect and warmth she deserves. I feel at peace knowing she has real company every week.",
    author: "Sarah K.",
    role: "Daughter of client, Dayton, OH",
  },
  {
    text: "My father was almost scammed out of his savings. Not only did they educate him on how these scams work — they made it interesting and relatable. He actually asks questions now instead of panicking. We are so grateful.",
    author: "Marcus T.",
    role: "Son of client, Kettering, OH",
  },
  {
    text: "My mother is fiercely independent and doesn't like feeling like she needs help. But from the very first technology session, something clicked. She now video calls her grandkids every Sunday and sets up her own reminders. I never thought I'd see that.",
    author: "Denise R.",
    role: "Daughter of client, Beavercreek, OH",
  },
  {
    text: "The free cybersecurity presentation at our senior center was eye-opening. He explained everything in plain language with practical steps people could take that same day. We've already had several families request in-home follow-ups.",
    author: "Pastor James W.",
    role: "Community organization, Dayton, OH",
  },
  {
    text: "Dad finally learned to video call his grandkids. Watching his face when he saw them on screen for the first time — that's something I'll never forget. They gave him back a piece of his family.",
    author: "Linda M.",
    role: "Daughter of client, Huber Heights, OH",
  },
  {
    text: "What sets this service apart is the consistency. Someone shows up every time, always prepared, always genuinely interested in my husband. We completed the full 12-session technology course and he is a completely different person with his phone now.",
    author: "Carol B.",
    role: "Wife of client, Centerville, OH",
  },
];

export default function TestimonialsPage() {
  return (
    <>
      <section className="bg-navy py-20 text-white">
        <div className="mx-auto max-w-4xl px-6">
          <h1 className="font-serif text-4xl font-semibold sm:text-5xl">
            What Families Are Saying
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/80">
            The highest compliment we receive is when a family tells us their
            loved one seems like themselves again &mdash; lighter, more engaged,
            more connected.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6">
          <div className="grid gap-6 sm:grid-cols-2">
            {testimonials.map((t) => (
              <div
                key={t.author}
                className="relative rounded border border-border-main bg-white p-6"
              >
                <span className="absolute left-4 top-2 font-serif text-6xl text-gold-light">
                  &ldquo;
                </span>
                <p className="relative z-10 pt-6 text-sm leading-relaxed text-navy">
                  {t.text}
                </p>
                <p className="mt-4 text-sm font-medium text-navy">
                  {t.author}
                </p>
                <p className="text-xs text-muted">{t.role}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href="mailto:info@pamperedcompanioncare.com"
              className="rounded bg-gold px-6 py-3 text-sm font-medium text-white transition hover:bg-gold/90"
            >
              Share Your Story
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
