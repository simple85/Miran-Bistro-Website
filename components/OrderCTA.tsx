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
            Hungry? <span className="text-gradient">Let&apos;s fix that.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-cream/70">
            Fresh off the grill and delivered to your door, or ready to pick up.
            Choose your favourite way to order.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">
            <a
              href={LINKS.lieferando}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full sm:w-auto"
            >
              Order on Lieferando
            </a>
            <a
              href={LINKS.uberEats}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full bg-gradient-to-r from-emerald-500 to-emerald-600 shadow-emerald-500/30 hover:shadow-emerald-500/40 sm:w-auto"
            >
              Order on Uber Eats
            </a>
            <a
              href={LINKS.directions}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline w-full sm:w-auto"
            >
              Get Directions
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
