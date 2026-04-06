export const metadata = {
  title: "About Us",
  description:
    "Built from decades of caregiving, military security expertise, and a belief that every Dayton senior deserves safety, connection, and dignity.",
};

const timeline = [
  {
    year: "Early Life",
    title: "Roots in Dayton, Ohio",
    desc: "Raised in Dayton with deep family values and a formative bond with his grandmother that would shape everything to come.",
  },
  {
    year: "Age 17",
    title: "Self-Taught Programmer",
    desc: "Taught himself to code from books — writing his first computer program entirely on his own, sparking a lifelong love of technology.",
  },
  {
    year: "1993",
    title: "Began Career in Elderly Care",
    desc: "Entered the field as a home health aide, providing hands-on companion and personal care to seniors across the Dayton area.",
  },
  {
    year: "8 Years",
    title: "U.S. Air Force Security Police",
    desc: "Served as Security Police in the United States Air Force, providing protection for nuclear assets and building deep real-world expertise in security and threat assessment.",
  },
  {
    year: "Today",
    title: "Pampered Companion Care",
    desc: "Founded to unite compassionate senior care with a structured three-tier technology education system and free cybersecurity training — a one-of-a-kind service built for Dayton.",
  },
];

const values = [
  {
    title: "Dignity",
    desc: "Every senior is treated with the deep respect they have earned. No exceptions. No shortcuts.",
  },
  {
    title: "Compassion",
    desc: "We show up with genuine warmth — not as a service provider, but as someone who truly cares.",
  },
  {
    title: "Protection",
    desc: "From everyday challenges to digital fraud, safety and security are fundamental rights for every senior.",
  },
  {
    title: "Community",
    desc: "We are proudly Dayton-born and community-rooted. This is not just our market — it is our home.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-navy py-20 text-white">
        <div className="mx-auto max-w-4xl px-6">
          <h1 className="font-serif text-4xl font-semibold sm:text-5xl">
            Built From a Lifetime
            <br />
            of Love and Service
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/80">
            Pampered Companion Care was not built from a business plan. It was
            built from decades of real caregiving, military-grade security
            expertise, and an unshakeable belief that every senior in Dayton
            deserves to feel safe, connected, and truly valued.
          </p>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="font-serif text-3xl font-semibold text-navy">
            Our Founder&rsquo;s Story
          </h2>
          <div className="mt-6 space-y-4 leading-relaxed text-muted">
            <p>
              Growing up in Dayton, Ohio, family was everything &mdash; and at
              the center of his family was his grandmother. That bond shaped the
              way he sees every senior he serves today: not as a client, but as
              someone&rsquo;s grandmother, someone&rsquo;s grandfather, someone
              who matters completely.
            </p>
            <p>
              In 1993, that love for seniors led him into elderly care, where he
              began working as a home health aide across the Dayton area. What
              started as a calling became a career. And that career became a
              mission.
            </p>
            <p>
              Running alongside his love of people was a lifelong passion for
              technology. At just 17 years old &mdash; with nothing but a couple
              of programming books and a mind built for problem-solving &mdash;
              he wrote his first computer program. No classroom. No instructor.
              Just curiosity and determination.
            </p>
            <p>
              That drive led him to serve his country.{" "}
              <strong className="text-navy">
                He spent eight years as a Security Police officer in the United
                States Air Force, protecting nuclear weapons and developing deep,
                real-world expertise in security
              </strong>{" "}
              &mdash; the kind most people only read about.
            </p>
            <p>
              After his military service, he brought it all back home to Dayton:
              the caregiving heart, the technology knowledge, and the security
              training. He put it all in service of the community he has always
              loved.
            </p>
          </div>

          <hr className="my-16 border-border-main" />

          {/* Our Approach */}
          <h2 className="font-serif text-3xl font-semibold text-navy">
            Our Approach
          </h2>
          <p className="mt-4 leading-relaxed text-muted">
            We do not believe in one-size-fits-all care. Every senior has a
            unique story, a unique set of needs, and a unique vision for what a
            good day looks like. Our approach begins with listening &mdash; and
            builds from there.
          </p>
          <p className="mt-4 leading-relaxed text-muted">
            Our caregivers and technology educators are selected not only for
            reliability and skill, but for warmth, patience, and genuine
            curiosity about people. Every match between caregiver and client is
            thoughtful &mdash; because the relationship is what makes care work.
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {[
              {
                title: "Locally Owned, Community Rooted",
                desc: "Not a franchise. Not a call center. Born in Dayton, built for Dayton.",
              },
              {
                title: "Three-Tier Technology System",
                desc: "The only companion care provider in Dayton with a structured, three-tier digital education program.",
              },
              {
                title: "Military-Grade Security Expertise",
                desc: "Eight years as a U.S. Air Force Security Police officer gives us a perspective on safety that exceeds typical care agencies.",
              },
              {
                title: "Dignity Is Non-Negotiable",
                desc: "Every decision is guided by treating every senior as the full, whole, valued person they are.",
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

          <hr className="my-16 border-border-main" />

          {/* Timeline */}
          <h2 className="font-serif text-3xl font-semibold text-navy">
            Our Journey
          </h2>
          <div className="mt-8 space-y-8 border-l-2 border-gold pl-8">
            {timeline.map((event) => (
              <div key={event.year} className="relative">
                <div className="absolute -left-[2.6rem] top-1 h-3 w-3 rounded-full bg-gold" />
                <p className="text-xs font-medium uppercase tracking-widest text-gold">
                  {event.year}
                </p>
                <h3 className="mt-1 font-medium text-navy">{event.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted">
                  {event.desc}
                </p>
              </div>
            ))}
          </div>

          <hr className="my-16 border-border-main" />

          {/* Values */}
          <h2 className="font-serif text-3xl font-semibold text-navy">
            What We Stand For
          </h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.title} className="rounded bg-navy p-6">
                <h3 className="font-medium text-gold">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
