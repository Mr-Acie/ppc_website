import Link from "next/link";
import Quiz from "@/components/mighty-elders/Quiz";

export const metadata = {
  title: "Mighty Elders | A Movement for Seniors and the Families Who Love Them",
  description:
    "Mighty Elders teaches Americans 60+ and their adult children how to use artificial intelligence in plain English, defend against scams, and refuse to be left behind. Founded in Dayton, Ohio by Acie Grimes.",
  openGraph: {
    title: "Mighty Elders | Living Libraries. Lit Up by AI.",
    description:
      "A movement for seniors and the families who love them. Take the free AI Confidence Quiz.",
    type: "website",
  },
};

const STATS = [
  {
    num: "$7.7B",
    label: "Lost by Americans 60+ to scams in 2024",
    source: "FBI IC3 Annual Report",
    href: "https://www.ic3.gov/AnnualReport/Reports/2025_IC3Report.pdf",
  },
  {
    num: "+37%",
    label: "Year-over-year increase in senior fraud losses",
    source: "FBI IC3 Annual Report",
    href: "https://www.ic3.gov/AnnualReport/Reports/2025_IC3Report.pdf",
  },
  {
    num: "1 in 10",
    label: "Americans 65+ who have ever used ChatGPT",
    source: "Pew Research, 2025",
    href: "https://www.pewresearch.org/short-reads/2025/06/25/34-of-us-adults-have-used-chatgpt-about-double-the-share-in-2023/",
  },
  {
    num: "47%",
    label: "Of older workers who say they want AI training",
    source: "AARP, 2025",
    href: "https://www.aarp.org/pri/topics/work-finances-retirement/employers-workforce/workforce-trends-older-adults-artificial-intelligence/",
  },
];

const LIE_VS_TRUTH = [
  {
    lie: "Seniors are too old to learn this stuff.",
    truth:
      "Wisdom and pattern recognition are the exact mental muscles AI rewards most. Decades of judgment cannot be replicated by a machine — only used by one.",
  },
  {
    lie: "AI is for the next generation, not yours.",
    truth:
      "AI in your hands is a magnifier of everything you already know. Letting the next generation own it alone is how we lost the last twenty years of dignity to scams.",
  },
  {
    lie: "If you got scammed, it's your fault.",
    truth:
      "It is not your fault. The criminals are using AI now — the same tool, in your hands, makes you almost impossible to fool. We teach that here.",
  },
];

const PILLARS = [
  {
    title: "AI in Plain English",
    body: "Every lesson written for the way you actually talk. No jargon, no condescension, no infomercials. One useful skill at a time — write a thank-you note, research a medication, plan a trip, draft an email to your doctor.",
  },
  {
    title: "Scam Defender",
    body: "Daily red-flag training that pays for itself the first day you use it. We teach you the patterns scammers use, the AI tools that detect them, and the rules every senior should live by.",
  },
  {
    title: "Living Libraries",
    body: "Your stories matter. Our community is built around what seniors know — and around teaching the next ten people. If you've ever raised a family, run a business, or survived a hard decade, you have curriculum inside you.",
  },
  {
    title: "Built for Two Generations",
    body: "Adult children are welcome here. Our Family Allies track is designed so you and your parent can learn together — and so adult children can finally do something useful instead of worrying from a distance.",
  },
];

export default function MightyEldersPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-me-ink py-24 text-white sm:py-32">
        <div className="absolute inset-0 opacity-[0.08]" aria-hidden="true">
          <div className="h-full w-full bg-gradient-to-br from-me-accent via-transparent to-me-primary" />
        </div>
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-me-accent">
            A Movement by Pampered Companion Care
          </p>
          <h1 className="mt-6 font-serif text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            They thought you were done.
            <br />
            <span className="text-me-accent">They were wrong.</span>
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-white/80 sm:text-xl">
            Mighty Elders is the movement for Americans 60+ and the families who love them.
            We teach AI in plain English, defend against scams like we mean it, and refuse to
            let an entire generation get written off by the same industry it helped build.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#quiz"
              className="rounded bg-me-accent px-8 py-4 text-base font-semibold text-white transition hover:bg-me-accent/90"
            >
              Take the Free AI Confidence Quiz
            </a>
            <a
              href="#manifesto"
              className="rounded border border-white/30 px-8 py-4 text-base font-medium text-white transition hover:bg-white/10"
            >
              Watch the Founder Video
            </a>
          </div>
          <p className="mt-6 text-sm text-white/60">
            8 questions. 3 minutes. Personalized roadmap delivered to your inbox.
          </p>
        </div>
      </section>

      {/* Stats band */}
      <section className="border-b border-border-main bg-me-paper">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <p className="text-center text-sm font-semibold uppercase tracking-widest text-me-primary">
            The fight we're in
          </p>
          <h2 className="mx-auto mt-3 max-w-2xl text-center font-serif text-3xl font-semibold leading-tight text-me-ink sm:text-4xl">
            The tech industry left seniors out. The criminals didn't.
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-border-main bg-border-main sm:grid-cols-2 lg:grid-cols-4">
            {STATS.map((stat) => (
              <div key={stat.label} className="bg-white p-6 text-center">
                <p className="font-serif text-4xl font-semibold text-me-accent sm:text-5xl">
                  {stat.num}
                </p>
                <p className="mt-3 text-sm leading-snug text-me-ink/80">{stat.label}</p>
                <a
                  href={stat.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block text-xs font-medium uppercase tracking-wider text-me-primary underline-offset-4 hover:underline"
                >
                  {stat.source}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder video / manifesto */}
      <section id="manifesto" className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-me-accent">
                From the founder
              </p>
              <h2 className="mt-3 font-serif text-4xl font-semibold leading-tight text-me-ink sm:text-5xl">
                Seniors are living libraries.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-me-ink/80">
                I'm Acie Grimes. I'm based in Dayton, Ohio, and I started Mighty Elders
                because I kept seeing the same thing: an entire generation being written off
                by the same industry they helped build.
              </p>
              <p className="mt-4 leading-relaxed text-me-ink/70">
                People over 60 have decades of judgment, pattern recognition, and hard-won
                wisdom that no machine on earth can replicate. The idea that you can't learn
                a new tool is not just wrong — it's insulting. We're here to change that, one
                plain-English lesson at a time.
              </p>
              <blockquote className="mt-8 border-l-4 border-me-accent pl-6">
                <p className="font-serif text-xl italic leading-relaxed text-me-ink">
                  &ldquo;Seniors are living libraries of knowledge, wisdom, and experience.
                  They should be at the forefront of artificial intelligence and technology,
                  not left behind by it.&rdquo;
                </p>
                <footer className="mt-3 text-sm font-semibold uppercase tracking-wider text-me-accent">
                  &mdash; Acie Grimes, Founder
                </footer>
              </blockquote>
            </div>
            <div>
              <div className="relative aspect-video overflow-hidden rounded-lg border border-border-main bg-me-ink shadow-lg">
                {/* Drop your YouTube/Vimeo embed here when the video is ready. */}
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-me-primary-dk to-me-ink p-8 text-center text-white">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-me-accent/90">
                    <svg
                      className="ml-1 h-7 w-7 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <p className="mt-5 font-serif text-2xl font-semibold">
                    Founder Video Coming Soon
                  </p>
                  <p className="mt-2 text-sm text-white/70">
                    2 minutes 30 seconds. Filmed July 2026.
                  </p>
                </div>
                {/*
                  When ready, replace the placeholder above with:
                  <iframe
                    className="absolute inset-0 h-full w-full"
                    src="https://www.youtube.com/embed/VIDEO_ID"
                    title="Mighty Elders — Founder Message from Acie Grimes"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Lie vs The Truth */}
      <section className="bg-me-paper py-20 sm:py-28">
        <div className="mx-auto max-w-5xl px-6">
          <p className="text-center text-sm font-semibold uppercase tracking-widest text-me-accent">
            The story they sold you
          </p>
          <h2 className="mx-auto mt-3 max-w-3xl text-center font-serif text-4xl font-semibold leading-tight text-me-ink sm:text-5xl">
            Three lies about seniors and technology. And the truth that ends them.
          </h2>
          <div className="mt-14 space-y-6">
            {LIE_VS_TRUTH.map((pair, i) => (
              <div
                key={i}
                className="overflow-hidden rounded-lg border border-border-main bg-white shadow-sm sm:grid sm:grid-cols-2"
              >
                <div className="border-b border-border-main bg-me-ruby/5 p-8 sm:border-b-0 sm:border-r">
                  <p className="text-xs font-semibold uppercase tracking-widest text-me-ruby">
                    The lie
                  </p>
                  <p className="mt-3 font-serif text-2xl font-semibold leading-snug text-me-ink/70 line-through decoration-me-ruby decoration-2">
                    {pair.lie}
                  </p>
                </div>
                <div className="bg-white p-8">
                  <p className="text-xs font-semibold uppercase tracking-widest text-me-emerald">
                    The truth
                  </p>
                  <p className="mt-3 text-lg leading-relaxed text-me-ink">{pair.truth}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-me-accent">
              What we teach
            </p>
            <h2 className="mt-3 font-serif text-4xl font-semibold leading-tight text-me-ink sm:text-5xl">
              Four pillars. One movement.
            </h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {PILLARS.map((p, i) => (
              <div
                key={p.title}
                className="rounded-lg border border-border-main bg-me-paper p-8 transition hover:border-me-primary"
              >
                <p className="font-serif text-5xl font-semibold text-me-accent/40">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-4 font-serif text-2xl font-semibold text-me-ink">
                  {p.title}
                </h3>
                <p className="mt-3 leading-relaxed text-me-ink/75">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quiz */}
      <section id="quiz" className="scroll-mt-24 bg-me-paper py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-6">
          <div className="mb-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-me-accent">
              Start here
            </p>
            <h2 className="mt-3 font-serif text-4xl font-semibold leading-tight text-me-ink sm:text-5xl">
              The Free AI Confidence Quiz
            </h2>
            <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-me-ink/70">
              8 questions. About 3 minutes. At the end, you'll get a personalized report telling
              you exactly where you stand, what to learn first, and how to protect yourself
              starting today. Built for seniors and the adult children helping them.
            </p>
          </div>
          <Quiz />
        </div>
      </section>

      {/* Family Allies callout */}
      <section className="bg-me-primary-dk py-20 text-white sm:py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-me-accent">
            For the adult children
          </p>
          <h2 className="mt-3 font-serif text-4xl font-semibold leading-tight sm:text-5xl">
            If you've ever worried about your parents online — this was built for you too.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
            Mighty Elders is the rare community designed for two generations. Bring your parent
            along — or learn the playbook yourself so you can finally stop worrying from a
            distance and start helping.
          </p>
          <div className="mt-10">
            <Link
              href="/mighty-elders/for-families"
              className="inline-block rounded bg-me-accent px-8 py-4 text-base font-semibold text-white transition hover:bg-me-accent/90"
            >
              See the Family Allies Track
            </Link>
          </div>
        </div>
      </section>

      {/* Sources */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-me-ink/50">
            Sources
          </p>
          <ul className="mt-4 space-y-2 text-sm leading-relaxed text-me-ink/70">
            <li>
              FBI Internet Crime Complaint Center, 2024 Annual Report:{" "}
              <a
                href="https://www.ic3.gov/AnnualReport/Reports/2025_IC3Report.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-me-primary underline-offset-4 hover:underline"
              >
                ic3.gov/AnnualReport/Reports/2025_IC3Report.pdf
              </a>
            </li>
            <li>
              Pew Research Center, June 2025:{" "}
              <a
                href="https://www.pewresearch.org/short-reads/2025/06/25/34-of-us-adults-have-used-chatgpt-about-double-the-share-in-2023/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-me-primary underline-offset-4 hover:underline"
              >
                pewresearch.org/short-reads/2025/06/25
              </a>
            </li>
            <li>
              AARP, Older Workers and AI:{" "}
              <a
                href="https://www.aarp.org/pri/topics/work-finances-retirement/employers-workforce/workforce-trends-older-adults-artificial-intelligence/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-me-primary underline-offset-4 hover:underline"
              >
                aarp.org/pri/topics/work-finances-retirement
              </a>
            </li>
            <li>
              AARP Tech Trends 2026:{" "}
              <a
                href="https://www.aarp.org/pri/topics/technology/internet-media-devices/2026-technology-trends-older-adults/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-me-primary underline-offset-4 hover:underline"
              >
                aarp.org/pri/topics/technology/2026-technology-trends
              </a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
