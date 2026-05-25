import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { asset } from "@/lib/asset";

export const metadata: Metadata = {
  title: "Miran Bistro — Fresh Döner, Burgers & Pizza in Berlin",
  description:
    "Miran Bistro in Berlin Weißensee. 20+ years of fresh, hygienic, charcoal-grilled döner, burgers, pizza and Turkish classics. Order on Lieferando or Uber Eats.",
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
    title: "Miran Bistro — Fresh Döner, Burgers & Pizza in Berlin",
    description:
      "20+ years of fresh, hygienic, charcoal-grilled food in Berlin. Order now.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
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
