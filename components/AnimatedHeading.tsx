import type { ReactNode } from "react";

type AnimatedHeadingProps = {
  children: ReactNode;
  className?: string;
};

export function AnimatedHeading({ children, className }: AnimatedHeadingProps) {
  return (
    <h2 className={["motion-reveal", className].filter(Boolean).join(" ")}>
      {children}
    </h2>
  );
}
