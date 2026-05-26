"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FoodArt from "@/components/food/FoodArt";
import type { FoodArt as FoodArtName } from "@/lib/menu";

type Scene = {
  art: FoodArtName;
  title: string;
  copy: string;
  accent: string;
  glow: string;
};

const SCENES: Scene[] = [
  {
    art: "doner",
    title: "Frischer Döner",
    copy: "Am Drehspieß langsam gegart und frisch von Hand geschnitten – mit knackigem Salat und unseren hausgemachten Saucen im warmen Fladenbrot.",
    accent: "text-ember-300",
    glow: "bg-ember-500/25",
  },
  {
    art: "pizza",
    title: "Steinofen‑Pizza",
    copy: "Handgezogener Teig, fruchtige Tomatensauce und blubbernder Mozzarella – gebacken, bis der Rand Blasen wirft und der Käse Fäden zieht.",
    accent: "text-ember-400",
    glow: "bg-ember-600/25",
  },
  {
    art: "burger",
    title: "Saftige Burger",
    copy: "Frisches Rindfleisch auf der heißen Platte plattgedrückt für knusprig‑karamellisierte Ränder, gestapelt mit geschmolzenem Käse und unserer Haussauce.",
    accent: "text-flame-400",
    glow: "bg-flame-600/25",
  },
  {
    art: "fries",
    title: "Goldene Pommes",
    copy: "Zweimal frittiert für maximale Knusprigkeit und einen fluffigen Kern, gesalzen direkt aus der Fritteuse. Unmöglich zu teilen.",
    accent: "text-copper",
    glow: "bg-ember-500/25",
  },
];

export default function FoodScroll() {
  const section = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);

      const scenes = gsap.utils.toArray<HTMLElement>(".fs-scene");

      // Start state: only the first scene visible.
      scenes.forEach((s, i) => {
        gsap.set(s, { autoAlpha: i === 0 ? 1 : 0 });
        gsap.set(s.querySelector(".fs-art"), {
          scale: i === 0 ? 1 : 0.6,
          rotation: i === 0 ? 0 : -40,
        });
        gsap.set(s.querySelectorAll(".fs-text > *"), {
          y: i === 0 ? 0 : 40,
          opacity: i === 0 ? 1 : 0,
        });
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section.current,
          start: "top top",
          end: "+=" + (SCENES.length - 1) * 110 + "%",
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });

      for (let i = 1; i < scenes.length; i++) {
        const prev = scenes[i - 1];
        const curr = scenes[i];
        tl.to(prev, { autoAlpha: 0, duration: 0.4 }, ">")
          .to(prev.querySelector(".fs-art"), { scale: 0.6, rotation: 40, duration: 0.5 }, "<")
          .to(curr, { autoAlpha: 1, duration: 0.4 }, "<0.15")
          .fromTo(
            curr.querySelector(".fs-art"),
            { scale: 0.6, rotation: -40 },
            { scale: 1, rotation: 0, duration: 0.6, ease: "power2.out" },
            "<"
          )
          .fromTo(
            curr.querySelectorAll(".fs-text > *"),
            { y: 40, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.5, stagger: 0.08 },
            "<0.1"
          );
      }

      // Continuous spin of every plate tied to scroll progress.
      gsap.to(".fs-art", {
        rotation: "+=120",
        ease: "none",
        scrollTrigger: {
          trigger: section.current,
          start: "top top",
          end: "+=" + (SCENES.length - 1) * 110 + "%",
          scrub: 1.5,
        },
      });

      // Progress dots
      ScrollTrigger.create({
        trigger: section.current,
        start: "top top",
        end: "+=" + (SCENES.length - 1) * 110 + "%",
        onUpdate: (self) => {
          const active = Math.round(self.progress * (SCENES.length - 1));
          gsap.utils.toArray<HTMLElement>(".fs-dot").forEach((d, i) => {
            d.style.opacity = i === active ? "1" : "0.3";
            d.style.width = i === active ? "28px" : "10px";
          });
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={section} className="relative h-screen overflow-hidden bg-charcoal">
      <div className="absolute inset-0 flex items-center">
        <div className="container-px relative w-full">
          {SCENES.map((scene) => (
            <div
              key={scene.art}
              className="fs-scene absolute inset-0 flex items-center"
            >
              <div className="grid w-full items-center gap-8 md:grid-cols-2">
                <div className="fs-text order-2 md:order-1">
                  <h2 className="font-display text-4xl font-black sm:text-5xl lg:text-6xl">
                    {scene.title}
                  </h2>
                  <p className="mt-5 max-w-md text-base leading-relaxed text-cream/70 sm:text-lg">
                    {scene.copy}
                  </p>
                  <div className={`mt-6 inline-flex items-center gap-2 text-sm font-semibold ${scene.accent}`}>
                    <span className="h-px w-10 bg-current" />
                    Täglich frisch zubereitet
                  </div>
                </div>

                <div className="order-1 flex justify-center md:order-2">
                  <div className="relative">
                    <div className={`absolute inset-0 -z-10 scale-90 rounded-full blur-[80px] ${scene.glow}`} />
                    <div className="fs-art w-64 sm:w-80 lg:w-[26rem]">
                      <FoodArt name={scene.art} className="h-auto w-full drop-shadow-2xl" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Progress dots */}
          <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 items-center gap-2">
            {SCENES.map((s, i) => (
              <span
                key={s.art}
                className="fs-dot h-2.5 rounded-full bg-gradient-to-r from-ember-400 to-flame-500 transition-all duration-300"
                style={{ width: i === 0 ? "28px" : "10px", opacity: i === 0 ? 1 : 0.3 }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
