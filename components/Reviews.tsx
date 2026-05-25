import Reveal from "@/components/Reveal";

type Review = {
  name: string;
  initial: string;
  time: string;
  text: string;
  color: string;
};

const REVIEWS: Review[] = [
  {
    name: "Daniel K.",
    initial: "D",
    time: "2 weeks ago",
    text: "Best döner in Weißensee, hands down. The meat is always fresh, juicy and perfectly seasoned. You can tell they care about quality.",
    color: "from-ember-500 to-flame-500",
  },
  {
    name: "Sophie M.",
    initial: "S",
    time: "1 month ago",
    text: "Ordered the cheeseburger menu and the pizza — both arrived hot and absolutely delicious. Super friendly staff and spotless counter.",
    color: "from-emerald-500 to-emerald-600",
  },
  {
    name: "Mehmet A.",
    initial: "M",
    time: "3 weeks ago",
    text: "Tastes like home. The lahmacun and köfte are exactly how they should be. Generous portions and very fair prices.",
    color: "from-sky-500 to-blue-600",
  },
  {
    name: "Laura B.",
    initial: "L",
    time: "2 months ago",
    text: "My go‑to spot for a quick, fresh lunch. The fries are unreal and the salads are always crisp. Highly recommend!",
    color: "from-purple-500 to-fuchsia-600",
  },
  {
    name: "Tobias R.",
    initial: "T",
    time: "1 week ago",
    text: "Fast delivery via Lieferando, food still warm and packed with care. The Miran special pizza is a must‑try.",
    color: "from-rose-500 to-flame-500",
  },
  {
    name: "Aylin Y.",
    initial: "A",
    time: "1 month ago",
    text: "Clean, welcoming and consistently great food for years. You can taste that everything is made fresh. Five stars!",
    color: "from-amber-500 to-ember-500",
  },
];

function Stars() {
  return (
    <div className="flex text-ember-400" aria-label="5 out of 5 stars">
      {[...Array(5)].map((_, i) => (
        <svg key={i} width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 2l2.9 6.2 6.8.8-5 4.6 1.3 6.7L12 17.8 5.9 20.4 7.2 13.7 2.2 9.1l6.8-.8L12 2z" />
        </svg>
      ))}
    </div>
  );
}

function GoogleG() {
  return (
    <svg width="18" height="18" viewBox="0 0 48 48" aria-hidden="true">
      <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.4 29.2 35 24 35c-6.1 0-11-4.9-11-11s4.9-11 11-11c2.8 0 5.4 1.1 7.3 2.8l5.7-5.7C33.6 6.1 29 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20c11 0 19.7-8 19.7-20 0-1.2-.1-2.3-.1-3.5z" />
      <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 16 19 13 24 13c2.8 0 5.4 1.1 7.3 2.8l5.7-5.7C33.6 6.1 29 4 24 4 16.3 4 9.7 8.3 6.3 14.7z" />
      <path fill="#4CAF50" d="M24 44c5.1 0 9.7-1.9 13.2-5.1l-6.1-5.2C29.1 35.1 26.7 36 24 36c-5.2 0-9.6-2.6-11.3-7l-6.5 5C9.6 39.6 16.2 44 24 44z" />
      <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.4-2.3 4.4-4.2 5.7l6.1 5.2C40.9 36.4 44 30.8 44 24c0-1.2-.1-2.3-.4-3.5z" />
    </svg>
  );
}

export default function Reviews() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[40vw] w-[40vw] -translate-x-1/2 rounded-full bg-ember-600/10 blur-[120px]" />
      <div className="container-px relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-cream/70">
            <GoogleG /> Loved on Google
          </p>
          <h2 className="font-display text-4xl font-black sm:text-5xl">
            What Berlin is <span className="text-gradient">saying</span>
          </h2>
          <div className="mt-5 flex items-center justify-center gap-3">
            <span className="font-display text-4xl font-black">4.7</span>
            <div>
              <Stars />
              <p className="text-xs text-cream/60">Hundreds of reviews</p>
            </div>
          </div>
        </Reveal>

        <Reveal
          staggerChildren
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {REVIEWS.map((r) => (
            <article
              key={r.name}
              className="card-glow flex h-full flex-col p-6 transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center gap-3">
                <div
                  className={`flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br ${r.color} font-bold text-white`}
                >
                  {r.initial}
                </div>
                <div>
                  <p className="font-semibold text-cream">{r.name}</p>
                  <p className="text-xs text-cream/50">{r.time}</p>
                </div>
                <div className="ml-auto">
                  <GoogleG />
                </div>
              </div>
              <div className="mt-4">
                <Stars />
              </div>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-cream/75">
                “{r.text}”
              </p>
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
