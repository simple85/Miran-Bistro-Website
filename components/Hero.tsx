"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FoodArt from "@/components/food/FoodArt";
import { LINKS } from "@/lib/links";

const FLOATERS = [
  { art: "pizza", className: "hidden lg:block lg:left-[4%] lg:top-[20%] lg:w-44", depth: 60 },
  { art: "burger", className: "hidden lg:block lg:right-[5%] lg:top-[16%] lg:w-48", depth: 90 },
  { art: "fries", className: "left-[8%] bottom-[12%] w-24 sm:w-32 lg:w-40", depth: 110 },
  { art: "doner", className: "right-[7%] bottom-[10%] w-28 sm:w-36 lg:w-44", depth: 70 },
] as const;

export default function Hero() {
  const root = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(".hero-eyebrow", { y: 24, opacity: 0, duration: 0.6 })
        .from(
          ".hero-line",
          { y: 40, opacity: 0, duration: 0.8, stagger: 0.12 },
          "-=0.2"
        )
        .from(".hero-sub", { y: 20, opacity: 0, duration: 0.6 }, "-=0.4")
        .from(
          ".hero-btn",
          { y: 20, opacity: 0, duration: 0.5, stagger: 0.1 },
          "-=0.3"
        )
        .from(".hero-badge", { scale: 0.6, opacity: 0, duration: 0.5 }, "-=0.4")
        .from(
          ".hero-floater",
          {
            scale: 0,
            opacity: 0,
            rotate: -45,
            duration: 0.9,
            ease: "back.out(1.7)",
            stagger: 0.12,
          },
          "-=0.8"
        );

      // Continuous gentle floating
      gsap.utils.toArray<HTMLElement>(".hero-floater").forEach((el, i) => {
        gsap.to(el, {
          y: "+=18",
          rotation: i % 2 === 0 ? 6 : -6,
          duration: 3 + i * 0.4,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        });
      });

      // Parallax on scroll
      gsap.utils.toArray<HTMLElement>(".hero-floater").forEach((el) => {
        const depth = Number(el.dataset.depth ?? 60);
        gsap.to(el, {
          yPercent: depth,
          ease: "none",
          scrollTrigger: {
            trigger: root.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      });

      // Subtle parallax on mouse move (desktop)
      const onMove = (e: MouseEvent) => {
        const { innerWidth, innerHeight } = window;
        const x = (e.clientX / innerWidth - 0.5) * 2;
        const y = (e.clientY / innerHeight - 0.5) * 2;
        gsap.to(".hero-floater", {
          x: (i: number) => x * (10 + i * 6),
          duration: 0.8,
          ease: "power2.out",
          overwrite: "auto",
        });
      };
      window.addEventListener("mousemove", onMove);
      return () => window.removeEventListener("mousemove", onMove);
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-16"
    >
      {/* Background glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/3 h-[60vw] w-[60vw] -translate-x-1/2 rounded-full bg-ember-600/20 blur-[120px]" />
        <div className="absolute right-0 top-0 h-[40vw] w-[40vw] rounded-full bg-flame-600/15 blur-[120px]" />
        <div className="absolute bottom-0 left-0 h-[35vw] w-[35vw] rounded-full bg-ember-500/10 blur-[120px]" />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(249,115,22,0.12),transparent_55%)]" />

      {/* Floating food */}
      {FLOATERS.map((f) => (
        <div
          key={f.art}
          data-depth={f.depth}
          className={`hero-floater pointer-events-none absolute z-10 drop-shadow-2xl ${f.className}`}
        >
          <FoodArt name={f.art} className="h-auto w-full" />
        </div>
      ))}

      {/* Center content */}
      <div className="container-px relative z-20 text-center">
        <p className="hero-eyebrow mx-auto mb-5 inline-flex items-center gap-2 rounded-full border border-ember-400/30 bg-ember-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-ember-300">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-ember-400" />
          Berlin · Weißensee · Seit 2004
        </p>

        <h1 className="font-display text-5xl font-black leading-[1.06] tracking-tight sm:text-7xl lg:text-8xl">
          <span className="hero-line block pb-[0.06em]">Flammengegrillte</span>
          <span className="hero-line block pb-[0.06em] text-gradient">Perfektion</span>
          <span className="hero-line block pb-[0.06em]">in jedem Bissen</span>
        </h1>

        <p className="hero-sub mx-auto mt-6 max-w-2xl text-base text-cream/70 sm:text-lg">
          Frisch geschnittener Döner, saftige Burger, steinofenfrische Pizza und
          knusprige Pommes – täglich frisch zubereitet, auf Bestellung gegrillt
          und in ganz Berlin beliebt.
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">
          <a
            href={LINKS.lieferando}
            target="_blank"
            rel="noopener noreferrer"
            className="hero-btn btn-primary w-full sm:w-auto"
          >
            Bei Lieferando bestellen
          </a>
          <a
            href={LINKS.uberEats}
            target="_blank"
            rel="noopener noreferrer"
            className="hero-btn btn-primary w-full bg-gradient-to-r from-olive-500 to-olive-600 shadow-olive-500/30 hover:shadow-olive-500/40 sm:w-auto"
          >
            Bei Uber Eats bestellen
          </a>
          <a
            href={LINKS.directions}
            target="_blank"
            rel="noopener noreferrer"
            className="hero-btn btn-outline w-full sm:w-auto"
          >
            Route planen
          </a>
        </div>

        <div className="hero-badge mx-auto mt-10 inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 backdrop-blur">
          <div className="flex text-ember-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} />
            ))}
          </div>
          <span className="text-sm text-cream/80">
            <strong className="text-cream">4,7/5</strong> von hunderten
            zufriedenen Gästen
          </span>
        </div>
      </div>
    </section>
  );
}

function Star() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2l2.9 6.2 6.8.8-5 4.6 1.3 6.7L12 17.8 5.9 20.4 7.2 13.7 2.2 9.1l6.8-.8L12 2z" />
    </svg>
  );
}
