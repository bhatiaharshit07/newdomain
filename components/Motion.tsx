import type { ReactNode } from "react";

type MotionRevealProps = {
  as?: "div" | "section" | "article" | "li";
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function MotionReveal({
  as = "div",
  children,
  className,
}: MotionRevealProps) {
  const revealClassName = ["motion-reveal", className]
    .filter(Boolean)
    .join(" ");

  switch (as) {
    case "article":
      return <article className={revealClassName}>{children}</article>;
    case "section":
      return <section className={revealClassName}>{children}</section>;
    case "li":
      return <li className={revealClassName}>{children}</li>;
    default:
      return <div className={revealClassName}>{children}</div>;
  }
}
