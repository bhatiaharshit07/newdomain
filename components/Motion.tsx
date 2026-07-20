"use client";

import { motion, type Variants } from "framer-motion";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

type MotionRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "article" | "li";
} & ComponentPropsWithoutRef<"div">;

const variants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

export function MotionReveal({
  children,
  className,
  delay = 0,
  as = "div",
  ...props
}: MotionRevealProps) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const MotionTag = motion[as];

  if (prefersReducedMotion) {
    const StaticTag = as;
    return (
      <StaticTag className={className} {...props}>
        {children}
      </StaticTag>
    );
  }

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, margin: "-80px" }}
      variants={variants}
      {...props}
    >
      {children}
    </MotionTag>
  );
}
