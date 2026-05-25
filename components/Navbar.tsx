"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LINKS } from "@/lib/links";
import { asset } from "@/lib/asset";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Specialties" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "border-b border-white/10 bg-charcoal/90 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav className="container-px flex h-16 items-center justify-between md:h-20">
        <Link href="/" className="flex items-center gap-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={asset("/logo.svg")} alt="Miran Bistro" className="h-10 w-10 md:h-12 md:w-12" />
          <span className="font-display text-xl font-extrabold tracking-wide md:text-2xl">
            Miran <span className="text-gradient">Bistro</span>
          </span>
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {NAV.map((item) => {
            const active = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`group relative text-sm font-medium tracking-wide transition-colors ${
                    active ? "text-ember-400" : "text-cream/80 hover:text-cream"
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute -bottom-1.5 left-0 h-0.5 rounded-full bg-gradient-to-r from-ember-400 to-flame-500 transition-all duration-300 ${
                      active ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden md:block">
          <a
            href={LINKS.lieferando}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Order Now
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 md:hidden"
        >
          <div className="space-y-1.5">
            <span
              className={`block h-0.5 w-5 bg-cream transition-transform ${
                open ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-cream transition-opacity ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-cream transition-transform ${
                open ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden transition-[max-height] duration-300 md:hidden ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <ul className="container-px flex flex-col gap-2 pb-6 pt-2">
          {NAV.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`block rounded-xl px-4 py-3 text-base font-medium ${
                  pathname === item.href
                    ? "bg-white/10 text-ember-400"
                    : "text-cream/85 hover:bg-white/5"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li className="pt-2">
            <a
              href={LINKS.lieferando}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full"
            >
              Order Now
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
