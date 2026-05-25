import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import CountUp from "@/components/CountUp";
import OrderCTA from "@/components/OrderCTA";
import FoodArt from "@/components/food/FoodArt";

export const metadata: Metadata = {
  title: "Über uns — Miran Bistro Berlin",
  description:
    "20+ Jahre Erfahrung, kompromisslose Hygiene und frische, täglich zubereitete Zutaten. Lerne Miran Bistro in Berlin Weißensee kennen.",
};

const STATS = [
  { to: 20, suffix: "+", label: "Jahre Erfahrung" },
  { to: 100, suffix: "%", label: "Frische Zutaten, täglich" },
  { to: 30, suffix: "+", label: "Gerichte auf der Karte" },
  { to: 5, suffix: "★", label: "Standard, nach dem wir kochen" },
];

const VALUES = [
  {
    title: "Hygiene zuerst",
    art: "salad",
    text: "Eine makellose Küche ist keine Option – sie ist die Grundlage. Flächen werden ständig desinfiziert, Zutaten korrekt gelagert und unser Team folgt in jeder Schicht strengen Hygiene‑Routinen, damit du mit gutem Gewissen genießen kannst.",
  },
  {
    title: "Immer frisch",
    art: "doner",
    text: "Wir schneiden Gemüse, marinieren unser Fleisch und backen unser Brot jeden Morgen frisch. Nichts bleibt liegen. Was du schmeckst, haben wir heute zubereitet – lebendig und voller Geschmack.",
  },
  {
    title: "Mit Sorgfalt gemacht",
    art: "kofte",
    text: "Zwei Jahrzehnte am Grill haben uns gelehrt, dass die kleinen Dinge zählen: das richtige Röstaroma, die richtige Würze, die richtige Portion. Jeder Teller verlässt unseren Tresen so, wie wir selbst bedient werden möchten.",
  },
];

export default function AboutPage() {
  return (
    <>
      <header className="relative overflow-hidden pb-10 pt-32 sm:pt-40">
        <div className="pointer-events-none absolute right-0 top-10 h-[40vw] w-[40vw] rounded-full bg-flame-600/15 blur-[120px]" />
        <div className="container-px relative">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-ember-400">
            Unsere Geschichte
          </p>
          <h1 className="max-w-4xl font-display text-5xl font-black leading-[1.02] sm:text-6xl lg:text-7xl">
            Zwei Jahrzehnte <span className="text-gradient">Geschmack</span>, jeden
            Tag frisch.
          </h1>
        </div>
      </header>

      {/* Story */}
      <section className="container-px grid items-center gap-12 py-12 lg:grid-cols-2">
        <Reveal className="space-y-5 text-cream/75">
          <p className="text-lg leading-relaxed">
            Seit mehr als{" "}
            <strong className="text-cream">20 Jahren</strong> ist Miran Bistro
            eine feste Adresse in Berlin‑Weißensee. Was als kleiner Grill im
            Kiez begann, ist zum lokalen Favoriten gewachsen – unser Versprechen
            hat sich dabei nie geändert.
          </p>
          <p className="leading-relaxed">
            Wir glauben, dass großartiges Essen aus großartigen Zutaten und einer
            ehrlichen Küche entsteht. Deshalb bereiten wir alles frisch zu, halten
            unsere Standards hoch und behandeln jeden Gast wie einen Stammgast.
            Vom ersten Döner bis zu den tausenden Burgern, Pizzen und Tellern
            seither – Qualität stand immer an erster Stelle.
          </p>
          <p className="leading-relaxed">
            Ob du bei uns isst, abholst oder liefern lässt: Du bekommst Essen so,
            wie es sein sollte – frisch, sauber und einfach richtig gut.
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
            Wofür wir <span className="text-gradient">stehen</span>
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
