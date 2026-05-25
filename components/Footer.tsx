import Link from "next/link";
import { CONTACT, LINKS } from "@/lib/links";
import { asset } from "@/lib/asset";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-charcoal-800">
      <div className="container-px grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="flex items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={asset("/logo.svg")} alt="Miran Bistro" className="h-12 w-12" />
            <span className="font-display text-xl font-extrabold">
              Miran <span className="text-gradient">Bistro</span>
            </span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/60">
            Fresh, hygienic and charcoal-grilled. Over 20 years of feeding Berlin
            with döner, burgers, pizza and Turkish classics.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest text-ember-400">
            Explore
          </h4>
          <ul className="mt-4 space-y-2 text-sm text-cream/70">
            <li><Link className="hover:text-cream" href="/">Home</Link></li>
            <li><Link className="hover:text-cream" href="/menu">Specialties</Link></li>
            <li><Link className="hover:text-cream" href="/about">About Us</Link></li>
            <li><Link className="hover:text-cream" href="/contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest text-ember-400">
            Visit Us
          </h4>
          <ul className="mt-4 space-y-2 text-sm text-cream/70">
            <li>{CONTACT.street}</li>
            <li>{CONTACT.city}</li>
            <li>
              <a className="hover:text-cream" href={CONTACT.phoneHref}>
                {CONTACT.phone}
              </a>
            </li>
            <li>
              <a
                className="hover:text-cream"
                href={LINKS.directions}
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Directions →
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest text-ember-400">
            Order Online
          </h4>
          <div className="mt-4 flex flex-col gap-3">
            <a
              href={LINKS.lieferando}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Order on Lieferando
            </a>
            <a
              href={LINKS.uberEats}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              Order on Uber Eats
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-px flex flex-col items-center justify-between gap-3 py-6 text-xs text-cream/50 sm:flex-row">
          <p>© {new Date().getFullYear()} Miran Bistro. All rights reserved.</p>
          <p>Langhansstraße 61, 13086 Berlin · Made with care.</p>
        </div>
      </div>
    </footer>
  );
}
