import type { ComponentPropsWithoutRef } from "react";

type CardProps = ComponentPropsWithoutRef<"div">;

export function Card({ className = "", ...props }: CardProps) {
  return (
    <div
      className={`rounded-lg border border-[color:var(--border)] bg-[color:var(--surface)] shadow-[0_1px_0_rgba(17,17,17,0.04)] ${className}`}
      {...props}
    />
  );
}
