import Reveal from "@/components/Reveal";
import { LINKS } from "@/lib/links";

export default function OrderCTA() {
  return (
    <section className="container-px py-20">
      <Reveal className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-charcoal-700 to-charcoal-800 px-6 py-14 text-center sm:px-12">
        <div className="pointer-events-none absolute -left-10 -top-10 h-48 w-48 rounded-full bg-ember-600/30 blur-[80px]" />
        <div className="pointer-events-none absolute -bottom-10 -right-10 h-48 w-48 rounded-full bg-flame-600/25 blur-[80px]" />
        <div className="relative">
          <h2 className="font-display text-4xl font-black sm:text-5xl">
            Hunger? <span className="text-gradient">Das lösen wir.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-cream/70">
            Frisch vom Grill und bis vor deine Tür geliefert oder zur Abholung
            bereit. Wähle einfach deinen Lieblingsweg zu bestellen.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">
            <a
              href={LINKS.lieferando}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full sm:w-auto"
            >
              Bei Lieferando bestellen
            </a>
            <a
              href={LINKS.uberEats}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full bg-gradient-to-r from-olive-500 to-olive-600 shadow-olive-500/30 hover:shadow-olive-500/40 sm:w-auto"
            >
              Bei Uber Eats bestellen
            </a>
            <a
              href={LINKS.directions}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline w-full sm:w-auto"
            >
              Route planen
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
