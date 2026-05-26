import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { CONTACT, LINKS } from "@/lib/links";

export const metadata: Metadata = {
  title: "Kontakt & Standort — Miran Bistro Berlin",
  description:
    "Finde Miran Bistro in der Langhansstraße 61, 13086 Berlin. Ruf +49 172 9342712 an, plane die Route oder bestelle online.",
};

const HOURS = [
  { day: "Montag – Freitag", time: "10:00 – 03:00" },
  { day: "Freitag - Sonntag", time: "10:00 – 05:00" },
];

// Storefront photo from the Google Maps listing (upscaled).
const STOREFRONT =
  "https://lh3.googleusercontent.com/gps-cs-s/APNQkAF1AFqD1koIlVSUZSdGJgMwmb9vprg2U_B3rzqt2WmflPEIOqIrIQm_LcUfIYVESY1l2GGEkPdpJxvMxJ_ZLi_MgKGpAKiEmD8uu17WCsJg6r4QRryi6DHP37rOyKZv1j70pl5tJ3mw26o=w1280-h720-k-no";

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
            Komm vorbei
          </p>
          <h1 className="font-display text-5xl font-black sm:text-6xl lg:text-7xl">
            Finde <span className="text-gradient">Miran Bistro</span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-cream/70">
            Wir sind mitten in Berlin‑Weißensee. Schau vorbei, ruf uns an oder
            bestelle online – ganz wie es für dich am einfachsten ist.
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
              <h3 className="font-display text-lg font-bold">Adresse</h3>
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
                Route planen →
              </a>
            </div>
          </div>

          <div className="card-glow flex items-start gap-4 p-6">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-olive-500 to-olive-600 text-white">
              <Icon path="M5 4h4l2 5-3 2a12 12 0 005 5l2-3 5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z" />
            </div>
            <div>
              <h3 className="font-display text-lg font-bold">Telefon</h3>
              <a
                href={CONTACT.phoneHref}
                className="mt-1 inline-block text-cream/70 hover:text-cream"
              >
                {CONTACT.phone}
              </a>
              <p className="mt-1 text-sm text-cream/50">
                Ruf uns für Abholbestellungen und Fragen an.
              </p>
            </div>
          </div>

          <div className="card-glow flex items-start gap-4 p-6">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-ember-400 to-ember-600 text-white">
              <Icon path="M12 7v5l3 2M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </div>
            <div className="w-full">
              <h3 className="font-display text-lg font-bold">Öffnungszeiten</h3>
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
              className="btn-primary flex-1 bg-gradient-to-r from-olive-500 to-olive-600 shadow-olive-500/30"
            >
              Uber Eats
            </a>
          </div>
        </Reveal>

        {/* Map column */}
        <Reveal y={60} className="min-h-[420px]">
          <div className="card-glow h-full w-full overflow-hidden p-1.5">
            <iframe
              title="Standort von Miran Bistro auf Google Maps"
              src={CONTACT.mapEmbed}
              className="h-full min-h-[420px] w-full rounded-[1.4rem] border-0 grayscale-[0.2]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </Reveal>
      </section>

      {/* Storefront photo */}
      <section className="container-px pb-20">
        <Reveal y={50}>
          <a
            href={LINKS.directions}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block overflow-hidden rounded-3xl border border-white/10"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={STOREFRONT}
              alt="Miran Bistro – Außenansicht in der Langhansstraße 61, Berlin"
              className="h-[320px] w-full object-cover transition-transform duration-700 group-hover:scale-105 sm:h-[460px]"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6 sm:p-8">
              <p className="mb-1 text-xs font-semibold uppercase tracking-[0.25em] text-ember-300">
                So findest du uns
              </p>
              <h2 className="font-display text-2xl font-black sm:text-3xl">
                Besuch uns in Weißensee
              </h2>
              <p className="mt-1 text-cream/80">
                Langhansstraße 61 · 13086 Berlin
              </p>
            </div>
          </a>
        </Reveal>
      </section>
    </>
  );
}
