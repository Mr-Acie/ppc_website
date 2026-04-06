import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-navy text-white/70">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <p className="font-serif text-xl font-semibold text-gold">
              Pampered Companion Care
            </p>
            <p className="mt-3 text-sm leading-relaxed">
              Compassionate in-home companionship, technology education, and free
              cybersecurity training for seniors in Dayton &amp; Montgomery
              County, Ohio.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-xs font-medium uppercase tracking-widest text-gold">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services" className="transition hover:text-gold">Services</Link></li>
              <li><Link href="/workshops" className="transition hover:text-gold">Workshops</Link></li>
              <li><Link href="/courses" className="transition hover:text-gold">Courses</Link></li>
              <li><Link href="/about" className="transition hover:text-gold">About Us</Link></li>
              <li><Link href="/faq" className="transition hover:text-gold">FAQ</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-xs font-medium uppercase tracking-widest text-gold">
              Contact
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="tel:3264673161" className="transition hover:text-gold">
                  (326) 467-3161
                </a>
              </li>
              <li>
                <a href="mailto:info@pamperedcompanioncare.com" className="transition hover:text-gold">
                  info@pamperedcompanioncare.com
                </a>
              </li>
              <li>Dayton &amp; Montgomery County, OH</li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="mb-4 text-xs font-medium uppercase tracking-widest text-gold">
              Hours
            </h3>
            <p className="text-sm">Monday &ndash; Friday</p>
            <p className="text-sm">9:00 AM &ndash; 5:00 PM</p>
            <Link
              href="/contact"
              className="mt-4 inline-block rounded bg-gold px-5 py-2.5 text-sm font-medium text-white transition hover:bg-gold/90"
            >
              Get In Touch
            </Link>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center text-xs">
          <p>&copy; {new Date().getFullYear()} Pampered Companion Care. All rights reserved.</p>
          <p className="mt-1">Dayton &amp; Montgomery County, Ohio</p>
        </div>
      </div>
    </footer>
  );
}
