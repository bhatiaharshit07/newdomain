"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

type MotionRevealProps = {
  as?: "div" | "section" | "article" | "li";
  children: ReactNode;
  className?: string;
  delay?: number;
};

const variants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

export function MotionReveal({
  as = "div",
  children,
  className,
  delay = 0,
}: MotionRevealProps) {
  const prefersReducedMotion = usePrefersReducedMotion();

  if (prefersReducedMotion) {
    switch (as) {
      case "article":
        return <article className={className}>{children}</article>;
      case "section":
        return <section className={className}>{children}</section>;
      case "li":
        return <li className={className}>{children}</li>;
      default:
        return <div className={className}>{children}</div>;
    }
  }

  const motionProps = {
    initial: "hidden",
    transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] },
    variants,
    viewport: { once: true, margin: "-80px" },
    whileInView: "visible",
  } as const;

  switch (as) {
    case "article":
      return (
        <motion.article className={className} {...motionProps}>
          {children}
        </motion.article>
      );
    case "section":
      return (
        <motion.section className={className} {...motionProps}>
          {children}
        </motion.section>
      );
    case "li":
      return (
        <motion.li className={className} {...motionProps}>
          {children}
        </motion.li>
      );
    default:
      return (
        <motion.div className={className} {...motionProps}>
          {children}
        </motion.div>
      );
  }
}
