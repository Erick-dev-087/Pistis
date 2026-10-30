import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans, Caveat } from "next/font/google";
import "./globals.css";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import MobileStickyBar from "@/components/MobileStickyBar";
import { Analytics } from "@vercel/analytics/next";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700"],
}); 


const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
  weight: ["500", "700"],
});

export const metadata: Metadata = {
  title: "Pistis Caterers & Outside Catering Services | Kenya",
  description:
    "Premier outside catering house in Thika serving corporate conferences, grand weddings, birthdays, graduation celebrations, and dignified memorials across Kenya.",
  keywords: [
    "Pistis Caterers",
    "Catering Thika",
    "Outside Catering Kenya",
    "Wedding Catering Kenya",
    "Corporate Catering Nairobi",
    "Graduation Catering Thika",
    "Memorial Catering Services Kenya",
  ],
  openGraph: {
    title: "Pistis Caterers & Services — Culinary Elegance Across Kenya",
    description:
      "Where Taste Meets Passion. Exquisite outside catering with golden chafing warmers, farm-fresh ingredients, and bespoke service.",
    url: "https://pistiscatering.co.ke",
    siteName: "Pistis Caterers",
    locale: "en_KE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${jakarta.variable} ${caveat.variable} h-full scroll-smooth`}>
      <body className="min-h-full flex flex-col bg-[#FAF8F5] text-[#0C1829] antialiased selection:bg-gold-500 selection:text-navy-950 font-sans">
        <TopBar />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingWhatsApp />
        <MobileStickyBar />
        <Analytics />
      </body>
    </html>
  );
}
