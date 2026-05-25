"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type Props = {
  children: React.ReactNode;
  className?: string;
  y?: number;
  delay?: number;
  stagger?: number;
  /** When true, direct children animate in sequence. */
  staggerChildren?: boolean;
  as?: "div" | "section" | "ul" | "li";
};

export default function Reveal({
  children,
  className,
  y = 40,
  delay = 0,
  stagger = 0.12,
  staggerChildren = false,
  as = "div",
}: Props) {
  const ref = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);

      const targets = staggerChildren
        ? (gsap.utils.toArray(el.children) as HTMLElement[])
        : [el];

      gsap.from(targets, {
        y,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        delay,
        stagger: staggerChildren ? stagger : 0,
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          once: true,
        },
      });
    }, ref);

    return () => ctx.revert();
  }, [y, delay, stagger, staggerChildren]);

  const Tag = as as React.ElementType;
  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}
