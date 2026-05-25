import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { CONTACT, LINKS } from "@/lib/links";

export const metadata: Metadata = {
  title: "Contact & Location — Miran Bistro Berlin",
  description:
    "Find Miran Bistro at Langhansstraße 61, 13086 Berlin. Call +49 172 9342712, get directions or order online.",
};

const HOURS = [
  { day: "Monday – Friday", time: "11:00 – 23:00" },
  { day: "Saturday", time: "11:00 – 23:00" },
  { day: "Sunday", time: "12:00 – 23:00" },
];

function Icon({ path }: { path: string }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d={path} stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function ContactPage() {
  return (
    <>
      <header className="relative overflow-hidden pb-8 pt-32 sm:pt-40">
        <div className="pointer-events-none absolute left-1/2 top-10 h-[40vw] w-[40vw] -translate-x-1/2 rounded-full bg-ember-600/15 blur-[120px]" />
        <div className="container-px relative text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-ember-400">
            Come say hello
          </p>
          <h1 className="font-display text-5xl font-black sm:text-6xl lg:text-7xl">
            Find <span className="text-gradient">Miran Bistro</span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-cream/70">
            We&apos;re in the heart of Berlin Weißensee. Drop by, give us a call,
            or order online — whatever&apos;s easiest for you.
          </p>
        </div>
      </header>

      <section className="container-px grid gap-8 py-12 lg:grid-cols-2">
        {/* Info column */}
        <Reveal className="space-y-5">
          <div className="card-glow flex items-start gap-4 p-6">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-ember-500 to-flame-500 text-white">
              <Icon path="M12 21s-7-5.4-7-11a7 7 0 1114 0c0 5.6-7 11-7 11zM12 12a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" />
            </div>
            <div>
              <h3 className="font-display text-lg font-bold">Address</h3>
              <p className="mt-1 text-cream/70">
                {CONTACT.street}
                <br />
                {CONTACT.city}, {CONTACT.country}
              </p>
              <a
                href={LINKS.directions}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex text-sm font-semibold text-ember-400 hover:text-ember-300"
              >
                Get Directions →
              </a>
            </div>
          </div>

          <div className="card-glow flex items-start gap-4 p-6">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 text-white">
              <Icon path="M5 4h4l2 5-3 2a12 12 0 005 5l2-3 5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z" />
            </div>
            <div>
              <h3 className="font-display text-lg font-bold">Phone</h3>
              <a
                href={CONTACT.phoneHref}
                className="mt-1 inline-block text-cream/70 hover:text-cream"
              >
                {CONTACT.phone}
              </a>
              <p className="mt-1 text-sm text-cream/50">
                Call us for pickup orders and questions.
              </p>
            </div>
          </div>

          <div className="card-glow flex items-start gap-4 p-6">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500 to-blue-600 text-white">
              <Icon path="M12 7v5l3 2M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </div>
            <div className="w-full">
              <h3 className="font-display text-lg font-bold">Opening Hours</h3>
              <ul className="mt-2 space-y-1 text-sm text-cream/70">
                {HOURS.map((h) => (
                  <li key={h.day} className="flex justify-between gap-4">
                    <span>{h.day}</span>
                    <span className="text-cream/90">{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={LINKS.lieferando}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex-1"
            >
              Lieferando
            </a>
            <a
              href={LINKS.uberEats}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex-1 bg-gradient-to-r from-emerald-500 to-emerald-600 shadow-emerald-500/30"
            >
              Uber Eats
            </a>
          </div>
        </Reveal>

        {/* Map column */}
        <Reveal y={60} className="min-h-[420px]">
          <div className="card-glow h-full w-full overflow-hidden p-1.5">
            <iframe
              title="Miran Bistro location on Google Maps"
              src={CONTACT.mapEmbed}
              className="h-full min-h-[420px] w-full rounded-[1.4rem] border-0 grayscale-[0.2]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </Reveal>
      </section>
    </>
  );
}
