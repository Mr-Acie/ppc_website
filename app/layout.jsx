import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["400", "600"],
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["300", "400", "500"],
});

export const metadata = {
  title: {
    default: "Pampered Companion Care | Senior Companion Care in Dayton, Ohio",
    template: "%s | Pampered Companion Care",
  },
  description:
    "Dayton's most trusted senior companion care. Compassionate in-home companionship, three-tier technology education, and free cybersecurity training for older adults in Dayton & Montgomery County, Ohio.",
  keywords: [
    "senior companion care Dayton",
    "senior technology help",
    "cybersecurity education seniors",
    "elderly care Dayton Ohio",
    "Pampered Companion Care",
    "senior fraud prevention",
    "digital empowerment seniors",
  ],
  openGraph: {
    title: "Pampered Companion Care | Senior Companion Care in Dayton, Ohio",
    description:
      "Compassionate in-home companionship, technology education, and free cybersecurity training for seniors in Dayton & Montgomery County.",
    type: "website",
    locale: "en_US",
    siteName: "Pampered Companion Care",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body className={`${dmSans.className} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
