import type { ReactNode } from "react";

type AnimatedHeadingProps = {
  children: ReactNode;
  className?: string;
  as?: "h1" | "h2";
};

export function AnimatedHeading({
  children,
  className,
  as: Heading = "h2",
}: AnimatedHeadingProps) {
  return (
    <Heading className={["motion-reveal", className].filter(Boolean).join(" ")}>
      {children}
    </Heading>
  );
}
