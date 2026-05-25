"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function CountUp({
  to,
  suffix = "",
  className,
}: {
  to: number;
  suffix?: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);
      const obj = { val: 0 };
      gsap.to(obj, {
        val: to,
        duration: 1.6,
        ease: "power2.out",
        scrollTrigger: { trigger: el, start: "top 90%", once: true },
        onUpdate: () => {
          el.textContent = Math.round(obj.val).toString() + suffix;
        },
      });
    }, ref);

    return () => ctx.revert();
  }, [to, suffix]);

  return (
    <span ref={ref} className={className}>
      0{suffix}
    </span>
  );
}
