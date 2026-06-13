"use client";

import { useState } from "react";

const QUESTIONS = [
  {
    id: "q1",
    text: "How comfortable are you using AI tools like ChatGPT today?",
    options: [
      { label: "I've never tried one", score: 0 },
      { label: "I've heard of them but haven't used one", score: 1 },
      { label: "I've tried one once or twice", score: 2 },
      { label: "I use one occasionally", score: 3 },
      { label: "I use one weekly or more", score: 4 },
    ],
  },
  {
    id: "q2",
    text: "If a text message says \"Your bank account is locked — click this link,\" what do you do?",
    options: [
      { label: "Click the link to fix it quickly", score: 0 },
      { label: "Call the number in the text", score: 0 },
      { label: "Ignore and delete it", score: 2 },
      { label: "Call my bank using the number on the back of my card", score: 4 },
    ],
  },
  {
    id: "q3",
    text: "Could you use AI to help you write a thank-you note, a letter to your doctor, or an important email?",
    options: [
      { label: "No idea where to start", score: 0 },
      { label: "I think so, but I'd need help", score: 2 },
      { label: "Yes, I've done something similar", score: 4 },
    ],
  },
  {
    id: "q4",
    text: "When you don't know what a new technology word means, what do you usually do?",
    options: [
      { label: "Get frustrated and stop", score: 0 },
      { label: "Ask a family member", score: 2 },
      { label: "Look it up myself", score: 3 },
      { label: "Ask AI to explain it in plain English", score: 4 },
    ],
  },
  {
    id: "q5",
    text: "How confident are you that you could spot an AI-generated scam call or fake video of someone you know?",
    options: [
      { label: "Not confident at all", score: 0 },
      { label: "A little — I'd be suspicious", score: 2 },
      { label: "Pretty confident — I know the red flags", score: 4 },
    ],
  },
  {
    id: "q6",
    text: "Are you the kind of person who has helped a friend or family member with technology before?",
    options: [
      { label: "Never", score: 0 },
      { label: "Once or twice", score: 2 },
      { label: "I'm the one people come to for help", score: 4 },
    ],
  },
  {
    id: "q7",
    text: "How do you feel about learning a new technology skill this year?",
    options: [
      { label: "I'd rather not", score: 0 },
      { label: "I'm open to it if it's useful", score: 2 },
      { label: "I'm ready — I want to stay sharp and current", score: 4 },
    ],
  },
  {
    id: "q8",
    text: "Why are you taking this quiz today?",
    options: [
      { label: "Curious about AI", score: 2 },
      { label: "Worried about scams and want to protect myself or someone I love", score: 3 },
      { label: "I want to stay independent and capable for years to come", score: 4 },
      { label: "I'm an adult child trying to help a parent", score: 4 },
    ],
  },
];

const MAX_SCORE = QUESTIONS.reduce(
  (sum, q) => sum + Math.max(...q.options.map((o) => o.score)),
  0,
);

function getResult(score) {
  const pct = (score / MAX_SCORE) * 100;
  if (pct < 30) {
    return {
      tier: "The Newcomer",
      headline: "You're at the starting line — and that's exactly where most people stand.",
      summary:
        "Right now, AI feels unfamiliar — but you're already doing the most important thing: you showed up. The vast majority of Americans 60+ are exactly where you are. The good news? The learning curve is shorter than you think. We'll start with plain-English basics and build real protection skills first.",
      next: [
        "Start with our free \"AI in Plain English\" intro lesson",
        "Take the Scam Defender 5-minute walkthrough first — it pays for itself the day you use it",
        "Bring a family member along — Mighty Elders is built for two generations",
      ],
    };
  }
  if (pct < 60) {
    return {
      tier: "The Curious Learner",
      headline: "You've got a foothold. Now let's build real confidence.",
      summary:
        "You know enough to be dangerous — in a good way. You're cautious, you're aware, and you've taken your first steps. The next stage is the one most people skip: turning curiosity into capability. We'll show you the three AI skills that will save you the most time and protect you the most.",
      next: [
        "Jump into the AI Confidence Track — Week 1 ships to your inbox immediately",
        "Watch the founder's 10-minute scam-detection walkthrough",
        "Join the next live Q&A (free, monthly)",
      ],
    };
  }
  if (pct < 85) {
    return {
      tier: "The Ready Defender",
      headline: "You're more equipped than 90% of your peers. Let's sharpen the edge.",
      summary:
        "You're already protecting yourself and probably helping others too. That makes you exactly the person we're building this movement around. The next step isn't more basics — it's mastery and leadership. We'll show you how to use AI for the things that actually matter in your life, and how to help others do the same.",
      next: [
        "Skip the intro track — go straight to the Advanced AI Toolkit",
        "Join the Mighty Elders private community (free) and meet others at your level",
        "Consider becoming a Community Captain — your wisdom is exactly what new members need",
      ],
    };
  }
  return {
    tier: "The Living Library",
    headline: "You're already at the forefront. The movement needs you.",
    summary:
      "You're not learning — you're leading. You've earned the confidence, the wisdom, and the instincts that the rest of this community needs. We didn't build Mighty Elders to teach people like you. We built it so you could teach the next ten people. Welcome home.",
    next: [
      "Apply for our founding Community Captain cohort",
      "Get early access to the Mighty Elders curriculum and shape what we teach",
      "Refer one person who needs this — they're closer than you think",
    ],
  };
}

export default function Quiz() {
  const [step, setStep] = useState(0); // 0..7 questions, 8 = email gate, 9 = result
  const [answers, setAnswers] = useState({});
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const totalQs = QUESTIONS.length;
  const isResult = step === totalQs + 1;
  const isEmailGate = step === totalQs;
  const score = Object.values(answers).reduce((s, v) => s + v, 0);
  const result = isResult ? getResult(score) : null;

  function answer(qid, optScore) {
    setAnswers((a) => ({ ...a, [qid]: optScore }));
    setTimeout(() => setStep((s) => s + 1), 180);
  }

  async function submitEmail(e) {
    e.preventDefault();
    if (!email || !email.includes("@")) return;
    setSubmitting(true);

    // POST to your collection endpoint. For now this logs and advances.
    // Replace with your real handler (Mailchimp/ConvertKit/Formspree/etc.).
    try {
      await fetch("/api/mighty-elders/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, score, answers }),
      }).catch(() => null);
    } finally {
      setSubmitting(false);
      setSubmitted(true);
      setStep((s) => s + 1);
    }
  }

  if (isResult && result) {
    return (
      <div className="mx-auto max-w-3xl">
        <div className="rounded-lg border border-me-paper-alt bg-white p-8 shadow-sm sm:p-12">
          <p className="text-sm font-medium uppercase tracking-widest text-me-accent">
            Your result
          </p>
          <h3 className="mt-3 font-serif text-3xl font-semibold text-me-ink sm:text-4xl">
            {result.tier}
          </h3>
          <p className="mt-4 text-lg leading-relaxed text-me-ink/80">
            {result.headline}
          </p>
          <p className="mt-6 leading-relaxed text-me-ink/70">
            {result.summary}
          </p>
          <div className="mt-8 rounded border border-me-paper-alt bg-me-paper p-6">
            <p className="text-sm font-semibold uppercase tracking-wider text-me-primary">
              Your next 3 steps
            </p>
            <ul className="mt-4 space-y-3">
              {result.next.map((step, i) => (
                <li key={i} className="flex gap-3 text-me-ink/80">
                  <span className="mt-1 inline-flex h-6 w-6 flex-none items-center justify-center rounded-full bg-me-primary text-xs font-semibold text-white">
                    {i + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#manifesto"
              className="rounded bg-me-primary px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-me-primary-dk"
            >
              Watch the founder video
            </a>
            <a
              href="/mighty-elders/for-families"
              className="rounded border border-me-primary px-6 py-3 text-center text-sm font-semibold text-me-primary transition hover:bg-me-paper-alt"
            >
              See the Family Allies track
            </a>
          </div>

          {submitted ? (
            <p className="mt-6 text-sm text-me-emerald">
              We've sent your personalized roadmap to {email}. Check your inbox in the next few minutes.
            </p>
          ) : null}
        </div>
      </div>
    );
  }

  if (isEmailGate) {
    return (
      <div className="mx-auto max-w-2xl">
        <div className="rounded-lg border border-me-paper-alt bg-white p-8 text-center shadow-sm sm:p-12">
          <p className="text-sm font-medium uppercase tracking-widest text-me-accent">
            Last step
          </p>
          <h3 className="mt-3 font-serif text-3xl font-semibold text-me-ink">
            Where should we send your personal report?
          </h3>
          <p className="mt-4 leading-relaxed text-me-ink/70">
            Your results are ready. Enter your email and we'll send your AI Confidence
            roadmap, your next 3 steps, and your free Scam Defender mini-course. No spam.
            Unsubscribe anytime.
          </p>
          <form onSubmit={submitEmail} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <input
              type="email"
              required
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="flex-1 rounded border border-border-main bg-white px-4 py-3 text-base text-me-ink placeholder:text-me-ink/40 focus:border-me-primary focus:outline-none"
              aria-label="Email address"
            />
            <button
              type="submit"
              disabled={submitting}
              className="rounded bg-me-accent px-6 py-3 text-sm font-semibold text-white transition hover:bg-me-accent/90 disabled:opacity-60"
            >
              {submitting ? "Sending..." : "See My Results"}
            </button>
          </form>
          <p className="mt-4 text-xs text-me-ink/50">
            We will never sell your email. Read our privacy approach below.
          </p>
        </div>
      </div>
    );
  }

  const q = QUESTIONS[step];
  const progressPct = ((step + 1) / (totalQs + 1)) * 100;

  return (
    <div className="mx-auto max-w-2xl">
      <div className="rounded-lg border border-me-paper-alt bg-white p-8 shadow-sm sm:p-12">
        {/* Progress */}
        <div className="mb-8">
          <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-me-ink/60">
            <span>
              Question {step + 1} of {totalQs}
            </span>
            <span>{Math.round(progressPct)}% complete</span>
          </div>
          <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-me-paper-alt">
            <div
              className="h-full bg-me-primary transition-all duration-500 ease-out"
              style={{ width: `${progressPct}%` }}
            />
          </div>
        </div>

        <h3 className="font-serif text-2xl font-semibold leading-snug text-me-ink sm:text-3xl">
          {q.text}
        </h3>

        <div className="mt-8 flex flex-col gap-3">
          {q.options.map((opt, i) => (
            <button
              key={i}
              type="button"
              onClick={() => answer(q.id, opt.score)}
              className="w-full rounded border-2 border-me-paper-alt bg-white px-5 py-4 text-left text-base font-medium text-me-ink transition hover:border-me-primary hover:bg-me-paper"
            >
              {opt.label}
            </button>
          ))}
        </div>

        {step > 0 ? (
          <button
            type="button"
            onClick={() => setStep((s) => Math.max(0, s - 1))}
            className="mt-6 text-sm font-medium text-me-ink/60 underline-offset-4 hover:underline"
          >
            Back to previous question
          </button>
        ) : null}
      </div>
    </div>
  );
}
