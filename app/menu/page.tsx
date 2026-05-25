import type { Metadata } from "next";
import MenuCard from "@/components/MenuCard";
import Reveal from "@/components/Reveal";
import OrderCTA from "@/components/OrderCTA";
import { MENU } from "@/lib/menu";

export const metadata: Metadata = {
  title: "Specialties & Menu — Miran Bistro Berlin",
  description:
    "Explore Miran Bistro's specialties: fresh döner, dürüm, smashed burgers, stone‑baked pizza, lahmacun, köfte, crispy fries and salads.",
};

export default function MenuPage() {
  return (
    <>
      <header className="relative overflow-hidden pb-12 pt-32 sm:pt-40">
        <div className="pointer-events-none absolute left-1/2 top-10 h-[40vw] w-[40vw] -translate-x-1/2 rounded-full bg-ember-600/15 blur-[120px]" />
        <div className="container-px relative text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-ember-400">
            Our specialties
          </p>
          <h1 className="font-display text-5xl font-black sm:text-6xl lg:text-7xl">
            The <span className="text-gradient">Menu</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-cream/70">
            Everything is grilled to order with fresh ingredients prepared the
            same day. Below are our most‑loved dishes — come hungry.
          </p>
        </div>
      </header>

      {/* Category quick nav */}
      <nav className="sticky top-16 z-30 border-y border-white/10 bg-charcoal/85 backdrop-blur md:top-20">
        <div className="container-px flex gap-2 overflow-x-auto py-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {MENU.map((cat) => (
            <a
              key={cat.id}
              href={`#${cat.id}`}
              className="whitespace-nowrap rounded-full border border-white/10 px-4 py-1.5 text-sm text-cream/75 transition-colors hover:border-ember-400 hover:text-cream"
            >
              {cat.title}
            </a>
          ))}
        </div>
      </nav>

      <div className="container-px space-y-20 py-16">
        {MENU.map((cat) => (
          <section key={cat.id} id={cat.id} className="scroll-mt-40">
            <Reveal>
              <div className="mb-8 flex items-baseline gap-4">
                <h2 className="font-display text-3xl font-black sm:text-4xl">
                  {cat.title}
                </h2>
                <span className="h-px flex-1 bg-gradient-to-r from-ember-500/60 to-transparent" />
              </div>
              <p className="-mt-4 mb-8 max-w-xl text-sm text-cream/60">
                {cat.tagline}
              </p>
            </Reveal>

            <Reveal
              staggerChildren
              stagger={0.08}
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
            >
              {cat.items.map((item) => (
                <MenuCard key={item.name} item={item} />
              ))}
            </Reveal>
          </section>
        ))}

        <p className="text-center text-xs text-cream/40">
          Dish images are illustrative. Prices and availability may vary — see
          Lieferando or Uber Eats for live ordering.
        </p>
      </div>

      <OrderCTA />
    </>
  );
}
