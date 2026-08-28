import Link from "next/link";
import Hero from "@/components/Hero";
import FoodScroll from "@/components/FoodScroll";
import Reviews from "@/components/Reviews";
import OrderCTA from "@/components/OrderCTA";
import Reveal from "@/components/Reveal";
import MenuCard from "@/components/MenuCard";
import { MENU } from "@/lib/menu";

const PROMISES = [
  {
    title: "20+ Jahre",
    text: "Zwei Jahrzehnte, in denen wir Berlin mit konstant gutem Essen verwöhnen.",
    icon: "M12 2l2.4 7.4H22l-6 4.4 2.3 7.2L12 16.6 5.7 21l2.3-7.2-6-4.4h7.6L12 2z",
  },
  {
    title: "Täglich frisch",
    text: "Gemüse und mariniertes Fleisch werden jeden Morgen frisch vorbereitet.",
    icon: "M12 2C7 7 6 10 6 13a6 6 0 0012 0c0-3-1-6-6-11z",
  },
  {
    title: "Makellose Hygiene",
    text: "Eine saubere Küche, der du vertrauen kannst – Hygiene ist nie Nebensache.",
    icon: "M12 2l8 4v6c0 5-3.4 9-8 10-4.6-1-8-5-8-10V6l8-4zm-1 13l5-5-1.4-1.4L11 12.2 9.4 10.6 8 12l3 3z",
  },
];

const FEATURED = MENU.flatMap((c) => c.items)
  .filter((i) => i.popular)
  .slice(0, 4);

export default function HomePage() {
  return (
    <>
      <Hero />

      <OrderCTA />

      {/* Fresh promise strip */}
      <section className="container-px -mt-2 py-16">
        <Reveal staggerChildren className="grid gap-5 md:grid-cols-3">
          {PROMISES.map((p) => (
            <div key={p.title} className="card-glow flex items-start gap-4 p-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-ember-500 to-flame-500">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="#fff" aria-hidden="true">
                  <path d={p.icon} />
                </svg>
              </div>
              <div>
                <h3 className="font-display text-xl font-bold">{p.title}</h3>
                <p className="mt-1 text-sm text-cream/65">{p.text}</p>
              </div>
            </div>
          ))}
        </Reveal>
      </section>

      <FoodScroll />

      {/* Specialties teaser */}
      <section className="container-px py-24">
        <Reveal className="flex flex-col items-end justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-ember-400">
              Beliebt bei allen
            </p>
            <h2 className="font-display text-4xl font-black sm:text-5xl">
              Probiere unsere <span className="text-gradient">Spezialitäten</span>
            </h2>
          </div>
          <Link
            href="/menu"
            className="btn-outline shrink-0"
          >
            Ganze Speisekarte →
          </Link>
        </Reveal>

        <Reveal
          staggerChildren
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {FEATURED.map((item) => (
            <MenuCard key={item.name} item={item} />
          ))}
        </Reveal>
      </section>

      <Reviews />
    </>
  );
}
