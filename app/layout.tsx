import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { asset } from "@/lib/asset";

export const metadata: Metadata = {
  title: "Miran Bistro — Frischer Döner, Burger & Pizza in Berlin",
  description:
    "Miran Bistro in Berlin‑Weißensee. Seit 20+ Jahren frischer, hygienischer Döner, Burger, Pizza und türkische Klassiker vom Grill. Jetzt bei Lieferando oder Uber Eats bestellen.",
  keywords: [
    "Miran Bistro",
    "Berlin Döner",
    "Langhansstraße",
    "Burger Berlin",
    "Pizza Berlin",
    "Lieferando",
    "Uber Eats",
  ],
  openGraph: {
    title: "Miran Bistro — Frischer Döner, Burger & Pizza in Berlin",
    description:
      "Seit 20+ Jahren frisches, hygienisches Essen vom Grill in Berlin. Jetzt bestellen.",
    type: "website",
    locale: "de_DE",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href={asset("/logo.svg")} type="image/svg+xml" />
      </head>
      <body>
        <SmoothScroll>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
