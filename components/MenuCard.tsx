import FoodImage from "@/components/food/FoodImage";
import type { MenuItem } from "@/lib/menu";

function Tag({ children, tone }: { children: React.ReactNode; tone: string }) {
  return (
    <span className={`rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${tone}`}>
      {children}
    </span>
  );
}

export default function MenuCard({ item }: { item: MenuItem }) {
  return (
    <article className="card-glow group flex h-full flex-col p-5 transition-all duration-300 hover:-translate-y-1 hover:border-ember-400/40">
      <div className="relative mb-4 flex items-center justify-center">
        <div className="absolute inset-0 m-auto rounded-full bg-ember-500/10 blur-2xl transition-opacity duration-300 group-hover:opacity-80" />
        <FoodImage
          name={item.art}
          src={item.image}
          zoom={item.imageZoom}
          alt={item.name}
          className="aspect-square w-full transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="mb-2 flex flex-wrap items-center gap-1.5">
        {item.popular && <Tag tone="bg-flame-500/20 text-ember-300">Beliebt</Tag>}
        {item.veggie && <Tag tone="bg-olive-500/25 text-olive-400">Vegetarisch</Tag>}
        {item.spicy && <Tag tone="bg-ember-500/20 text-ember-300">Scharf</Tag>}
      </div>

      <h3 className="font-display text-lg font-bold leading-tight text-cream">
        {item.name}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-cream/70">
        {item.description}
      </p>
    </article>
  );
}
