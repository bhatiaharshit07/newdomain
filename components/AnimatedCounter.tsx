"use client";

import { useEffect, useRef, useState } from "react";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

type AnimatedCounterProps = {
  value: number | null;
  suffix?: string;
  display?: string;
};

export function AnimatedCounter({ value, suffix = "", display }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (value === null || hasAnimated || !ref.current) {
      return;
    }

    if (prefersReducedMotion) {
      setCount(value);
      setHasAnimated(true);
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry?.isIntersecting) {
        return;
      }

      const start = performance.now();
      const duration = 900;

      const tick = (time: number) => {
        const progress = Math.min((time - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setCount(Math.round(value * eased));

        if (progress < 1) {
          requestAnimationFrame(tick);
        } else {
          setHasAnimated(true);
        }
      };

      requestAnimationFrame(tick);
      observer.disconnect();
    });

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [hasAnimated, prefersReducedMotion, value]);

  return (
    <span ref={ref}>
      {display ?? count}
      {display ? "" : suffix}
    </span>
  );
}
