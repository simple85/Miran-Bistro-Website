import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import CountUp from "@/components/CountUp";
import OrderCTA from "@/components/OrderCTA";
import FoodArt from "@/components/food/FoodArt";

export const metadata: Metadata = {
  title: "About Us — Miran Bistro Berlin",
  description:
    "20+ years of experience, uncompromising hygiene and fresh ingredients prepared daily. Meet Miran Bistro in Berlin Weißensee.",
};

const STATS = [
  { to: 20, suffix: "+", label: "Years of experience" },
  { to: 100, suffix: "%", label: "Fresh, daily ingredients" },
  { to: 30, suffix: "+", label: "Dishes on the menu" },
  { to: 5, suffix: "★", label: "Standard we cook to" },
];

const VALUES = [
  {
    title: "Hygiene First",
    art: "salad",
    text: "A spotless kitchen isn't optional — it's the foundation. Surfaces are sanitised constantly, ingredients are stored correctly, and our team follows strict food‑safety routines every shift, so you can eat with complete peace of mind.",
  },
  {
    title: "Always Fresh",
    art: "doner",
    text: "We prep vegetables, marinate our meat and bake our bread fresh every single morning. Nothing sits around. What you taste is what we made today — bright, vibrant and full of flavour.",
  },
  {
    title: "Crafted with Care",
    art: "kofte",
    text: "Two decades of grilling have taught us that small details matter: the right char, the right seasoning, the right portion. Every plate leaves our counter the way we'd want to be served ourselves.",
  },
];

export default function AboutPage() {
  return (
    <>
      <header className="relative overflow-hidden pb-10 pt-32 sm:pt-40">
        <div className="pointer-events-none absolute right-0 top-10 h-[40vw] w-[40vw] rounded-full bg-flame-600/15 blur-[120px]" />
        <div className="container-px relative">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-ember-400">
            Our story
          </p>
          <h1 className="max-w-4xl font-display text-5xl font-black leading-[1.02] sm:text-6xl lg:text-7xl">
            Two decades of <span className="text-gradient">flavour</span>, fresh
            every day.
          </h1>
        </div>
      </header>

      {/* Story */}
      <section className="container-px grid items-center gap-12 py-12 lg:grid-cols-2">
        <Reveal className="space-y-5 text-cream/75">
          <p className="text-lg leading-relaxed">
            For more than{" "}
            <strong className="text-cream">20 years</strong>, Miran Bistro has
            been a familiar address in Berlin&apos;s Weißensee. What started as a
            small neighbourhood grill has grown into a local favourite — but our
            promise has never changed.
          </p>
          <p className="leading-relaxed">
            We believe great food comes from great ingredients and an honest
            kitchen. That&apos;s why we prepare everything fresh, keep our
            standards high and treat every guest like a regular. From the first
            döner we carved to the thousands of burgers, pizzas and plates since,
            quality has always come first.
          </p>
          <p className="leading-relaxed">
            Whether you dine in, pick up or order delivery, you&apos;re getting
            food made the way it should be: fresh, clean and genuinely good.
          </p>
        </Reveal>

        <Reveal y={60} className="relative">
          <div className="card-glow grid grid-cols-2 gap-4 p-6">
            {(["pizza", "burger", "donerplate", "fries"] as const).map((art) => (
              <div
                key={art}
                className="flex items-center justify-center rounded-2xl bg-white/5 p-4"
              >
                <FoodArt name={art} className="h-28 w-28" />
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Stats */}
      <section className="container-px py-12">
        <Reveal
          staggerChildren
          className="grid gap-6 rounded-3xl border border-white/10 bg-charcoal-800/60 p-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {STATS.map((s) => (
            <div key={s.label} className="text-center">
              <CountUp
                to={s.to}
                suffix={s.suffix}
                className="font-display text-5xl font-black text-gradient"
              />
              <p className="mt-2 text-sm text-cream/60">{s.label}</p>
            </div>
          ))}
        </Reveal>
      </section>

      {/* Values */}
      <section className="container-px py-16">
        <Reveal className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="font-display text-4xl font-black sm:text-5xl">
            What we <span className="text-gradient">stand for</span>
          </h2>
        </Reveal>

        <div className="space-y-6">
          {VALUES.map((v, i) => (
            <Reveal key={v.title} y={50}>
              <div
                className={`card-glow flex flex-col items-center gap-6 p-8 md:flex-row ${
                  i % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="flex h-40 w-40 shrink-0 items-center justify-center rounded-3xl bg-gradient-to-br from-ember-500/15 to-flame-500/10">
                  <FoodArt name={v.art as never} className="h-32 w-32" />
                </div>
                <div className={i % 2 === 1 ? "md:text-right" : ""}>
                  <h3 className="font-display text-2xl font-bold sm:text-3xl">
                    {v.title}
                  </h3>
                  <p className="mt-3 max-w-xl leading-relaxed text-cream/70">
                    {v.text}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <OrderCTA />
    </>
  );
}
