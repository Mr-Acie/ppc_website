import Link from "next/link";

/**
 * Mobile-only sticky bottom bar with the two highest-intent CTAs:
 *  - Call (tap-to-dial)
 *  - Book a free consultation
 * Hidden on >= md screens where the header CTA is visible.
 */
export default function StickyCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-white/10 bg-navy text-white shadow-lg md:hidden">
      <a
        href="tel:3264673161"
        aria-label="Call Pampered Companion Care"
        className="flex items-center justify-center gap-2 py-3 text-sm font-medium transition active:bg-white/10"
      >
        <span aria-hidden="true">📞</span> Call
      </a>
      <Link
        href="/book"
        aria-label="Book an appointment"
        className="flex items-center justify-center gap-2 bg-gold py-3 text-sm font-semibold transition active:bg-gold/90"
      >
        Book Appointment
      </Link>
    </div>
  );
}
