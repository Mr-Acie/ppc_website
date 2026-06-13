import Link from "next/link";

export const metadata = {
  title: "Mighty Elders for Families | A Track Built for Adult Children of Seniors",
  description:
    "If you've worried about your parents online — about scams, AI confusion, or being left behind — Mighty Elders Family Allies gives you the playbook to actually help. Built for two generations, learning together.",
};

const WORRIES = [
  {
    worry: "I'm afraid my parent will fall for a scam.",
    answer:
      "Americans 60+ lost $7.7 billion last year. We teach the exact red flags, the conversational scripts that work with a hesitant parent, and the AI tools that will catch fakes you'd miss yourself.",
  },
  {
    worry: "I live far away. I can't be there every day.",
    answer:
      "Family Allies is built around remote help. Every module includes a 'how to teach this on a phone call' summary, a printable cheat sheet you can mail or text, and a check-in framework so you know what to ask.",
  },
  {
    worry: "My parent gets defensive when I try to help.",
    answer:
      "That's not a personality issue — it's a dignity issue. We teach the language and approach that lets your parent stay the expert in their own life while you become their co-pilot, not their corrector.",
  },
  {
    worry: "I don't know what I don't know about AI either.",
    answer:
      "Most adult children are only one generation ahead, not ten. The Family Allies track teaches you and your parent at the same time, so neither of you is the student and neither of you is the teacher.",
  },
];

const TRACK = [
  {
    week: "Week 1",
    title: "The Conversation Starter",
    body: "How to bring up AI and scams with your parent without making them defensive. Includes the 7-word opener that works almost every time.",
  },
  {
    week: "Week 2",
    title: "The Scam Audit",
    body: "Walk your parent through a 15-minute audit of their phone, email, and bank notifications. We give you the checklist.",
  },
  {
    week: "Week 3",
    title: "AI Together",
    body: "Pick one daily task your parent already does — a thank-you note, a recipe search, a doctor email — and master it together using ChatGPT.",
  },
  {
    week: "Week 4",
    title: "The Standing Date",
    body: "Set up a sustainable weekly 'tech together' habit. We give you 12 weeks of conversation prompts so it never feels like homework.",
  },
];

export default function FamilyAlliesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-me-ink py-24 text-white sm:py-28">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-me-accent">
            Mighty Elders · Family Allies
          </p>
          <h1 className="mt-6 font-serif text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
            You've been worrying.
            <br />
            <span className="text-me-accent">Now you can actually help.</span>
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-white/80">
            Family Allies is the track built for adult children of seniors. If you've ever
            wondered how to talk to your parent about scams, AI, or technology without making
            it weird — this is where it stops being weird.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/mighty-elders#quiz"
              className="rounded bg-me-accent px-8 py-4 text-base font-semibold text-white transition hover:bg-me-accent/90"
            >
              Take the Free Quiz (For You or With Your Parent)
            </Link>
            <Link
              href="/mighty-elders"
              className="rounded border border-white/30 px-8 py-4 text-base font-medium text-white transition hover:bg-white/10"
            >
              Back to Mighty Elders
            </Link>
          </div>
        </div>
      </section>

      {/* Worries */}
      <section className="bg-me-paper py-20 sm:py-28">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-me-accent">
              What we hear from you
            </p>
            <h2 className="mt-3 font-serif text-4xl font-semibold leading-tight text-me-ink sm:text-5xl">
              The four worries every adult child has.
            </h2>
            <p className="mt-5 leading-relaxed text-me-ink/70">
              And what we actually do about each one.
            </p>
          </div>
          <div className="mt-14 space-y-6">
            {WORRIES.map((w, i) => (
              <div
                key={i}
                className="rounded-lg border border-border-main bg-white p-8 shadow-sm"
              >
                <div className="flex items-start gap-5">
                  <div className="flex h-12 w-12 flex-none items-center justify-center rounded-full bg-me-accent/15 font-serif text-xl font-semibold text-me-accent">
                    {i + 1}
                  </div>
                  <div>
                    <p className="font-serif text-2xl font-semibold leading-snug text-me-ink">
                      &ldquo;{w.worry}&rdquo;
                    </p>
                    <p className="mt-4 leading-relaxed text-me-ink/75">{w.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4-Week Track */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-me-accent">
              The 4-week Family Allies track
            </p>
            <h2 className="mt-3 font-serif text-4xl font-semibold leading-tight text-me-ink sm:text-5xl">
              One month. A new relationship with technology — and with your parent.
            </h2>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {TRACK.map((t) => (
              <div
                key={t.title}
                className="rounded-lg border border-border-main bg-me-paper p-8"
              >
                <p className="text-xs font-semibold uppercase tracking-widest text-me-primary">
                  {t.week}
                </p>
                <h3 className="mt-3 font-serif text-2xl font-semibold text-me-ink">
                  {t.title}
                </h3>
                <p className="mt-3 leading-relaxed text-me-ink/75">{t.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Two-Generation Manifesto */}
      <section className="bg-me-primary-dk py-20 text-white sm:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-me-accent">
            Why this track exists
          </p>
          <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight sm:text-5xl">
            The future will not be inherited.
            <br />
            It will be built together.
          </h2>
          <p className="mt-8 text-lg leading-relaxed text-white/85">
            Every other technology brand treats your parent as a problem to manage. We treat
            your parent as a partner to learn alongside. Every other scam-prevention program
            scares your parent. We give them the skills to scare the scammers.
          </p>
          <p className="mt-6 text-lg leading-relaxed text-white/85">
            You are not your parent's tech support. You are their ally. And starting now, you
            have a playbook.
          </p>
          <div className="mt-12">
            <Link
              href="/mighty-elders#quiz"
              className="inline-block rounded bg-me-accent px-8 py-4 text-base font-semibold text-white transition hover:bg-me-accent/90"
            >
              Start with the Free 3-Minute Quiz
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-me-paper py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-6">
          <p className="text-center text-sm font-semibold uppercase tracking-widest text-me-accent">
            Common questions
          </p>
          <h2 className="mt-3 text-center font-serif text-4xl font-semibold leading-tight text-me-ink sm:text-5xl">
            What adult children ask us first.
          </h2>
          <div className="mt-12 space-y-4">
            {[
              {
                q: "Does my parent have to be on Mighty Elders for this to work?",
                a: "No. Family Allies works on its own — you'll get the language, the audits, and the playbook regardless. It just works better when your parent is in the community too.",
              },
              {
                q: "Is this free?",
                a: "The AI Confidence Quiz and the welcome series are free forever. The 4-week Family Allies track is included in our Family Duo membership, which covers you and your parent together at one rate.",
              },
              {
                q: "I'm not in Dayton. Can I still join?",
                a: "Yes. Mighty Elders is national. We're based in Dayton, Ohio through Pampered Companion Care, but the program is fully remote-friendly for families across the country.",
              },
              {
                q: "How do I get my parent to actually try this?",
                a: "Start by taking the quiz yourself. Then forward your results to your parent and ask them to take it too. The Week 1 module gives you the exact 7-word opener that works.",
              },
            ].map((f, i) => (
              <details
                key={i}
                className="group rounded-lg border border-border-main bg-white p-6 shadow-sm open:border-me-primary"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-4 text-left">
                  <span className="font-serif text-lg font-semibold text-me-ink">{f.q}</span>
                  <span className="flex h-8 w-8 flex-none items-center justify-center rounded-full border border-border-main text-me-primary transition group-open:rotate-45">
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                  </span>
                </summary>
                <p className="mt-4 leading-relaxed text-me-ink/75">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
