"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Workshops", href: "/workshops" },
  { label: "Courses", href: "/courses" },
  { label: "About", href: "/about" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "FAQ", href: "/faq" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-navy text-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-3 text-sm font-medium sm:flex-row sm:items-center sm:justify-between">
          <span>
            <span className="text-gold">Hours:</span> Mon&ndash;Fri 9 AM &ndash; 5 PM
          </span>
          <a
            href="tel:3264673161"
            className="underline decoration-gold underline-offset-4 transition hover:text-gold"
          >
            (326) 467-3161
          </a>
        </div>
      </div>

      {/* Main nav */}
      <div className="border-b border-border-main bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-md bg-gradient-to-br from-gold to-gold-light shadow-sm">
              <span className="font-serif text-lg font-semibold text-navy">P</span>
            </div>
            <div className="hidden sm:block">
              <p className="font-serif text-xl font-semibold text-navy">
                Pampered Companion Care
              </p>
              <p className="text-xs font-medium uppercase tracking-widest text-muted">
                Senior Companion Care
              </p>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded px-4 py-2 text-sm font-medium text-navy transition hover:bg-gold-light"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="ml-3 rounded bg-gold px-5 py-2.5 text-sm font-medium text-white transition hover:bg-gold/90"
            >
              Contact Us
            </Link>
          </nav>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            className="flex h-11 w-11 items-center justify-center rounded border border-border-main text-navy lg:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="border-b border-border-main bg-white px-6 py-4 shadow-lg lg:hidden">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded border border-border-main px-4 py-3 text-sm font-medium text-navy transition hover:bg-gold-light"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="mt-2 rounded bg-gold px-5 py-3 text-center text-sm font-medium text-white"
            >
              Contact Us
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
