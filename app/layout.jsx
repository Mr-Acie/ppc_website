import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyCallBar from "@/components/StickyCallBar";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["400", "600"],
  style: ["normal", "italic"],
  display: "swap",
  preload: true,
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["300", "400", "500"],
  display: "swap",
  preload: true,
});

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://pamperedcompanioncare.org";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Genius Bar for Seniors in Dayton, Ohio | Pampered Companion Care",
    template: "%s | Pampered Companion Care",
  },
  description:
    "A Genius Bar–style technology and AI help service for seniors in Dayton, Ohio. Book one-on-one tech support, smartphone & AI coaching, companion care, and free cybersecurity training. Call (326) 467-3161.",
  keywords: [
    "Genius Bar for seniors",
    "tech support for seniors Dayton",
    "AI help for seniors",
    "senior technology coaching Ohio",
    "smartphone help for seniors",
    "senior companion care Dayton",
    "cybersecurity education seniors",
    "elderly tech support Dayton Ohio",
    "Pampered Companion Care",
    "senior fraud prevention",
    "digital empowerment seniors",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title:
      "Genius Bar for Seniors in Dayton, Ohio | Pampered Companion Care",
    description:
      "Book one-on-one technology, AI, and cybersecurity help for seniors in Dayton & Montgomery County. Patient, in-home tech coaching plus companion care.",
    url: SITE_URL,
    type: "website",
    locale: "en_US",
    siteName: "Pampered Companion Care",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Pampered Companion Care — Genius Bar for Seniors in Dayton, Ohio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Genius Bar for Seniors in Dayton, Ohio",
    description:
      "Patient one-on-one tech, AI, and cybersecurity help for seniors in Dayton & Montgomery County.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  category: "Senior Services",
};

export const viewport = {
  themeColor: "#0B2545",
  width: "device-width",
  initialScale: 1,
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#business`,
  name: "Pampered Companion Care",
  description:
    "Genius Bar–style technology, AI, and cybersecurity help for seniors, plus compassionate in-home companion care in Dayton & Montgomery County, Ohio.",
  url: SITE_URL,
  telephone: "+1-326-467-3161",
  email: "info@pamperedcompanioncare.com",
  image: `${SITE_URL}/og-image.png`,
  priceRange: "$$",
  areaServed: [
    { "@type": "City", name: "Dayton" },
    { "@type": "AdministrativeArea", name: "Montgomery County, Ohio" },
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dayton",
    addressRegion: "OH",
    addressCountry: "US",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
      ],
      opens: "09:00",
      closes: "17:00",
    },
  ],
  serviceType: [
    "Senior technology coaching",
    "AI help for seniors",
    "Smartphone & tablet support",
    "Cybersecurity & fraud-prevention training",
    "Companion care",
  ],
  sameAs: [],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd),
          }}
        />
      </head>
      <body className={`${dmSans.className} antialiased`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-2 focus:top-2 focus:z-[100] focus:rounded focus:bg-navy focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <StickyCallBar />
      </body>
    </html>
  );
}
