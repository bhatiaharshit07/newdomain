import type { ComponentPropsWithoutRef } from "react";

type BadgeProps = ComponentPropsWithoutRef<"span">;

export function Badge({ className = "", ...props }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-[color:var(--border)] px-3 py-1 text-xs font-medium uppercase tracking-[0.14em] text-[color:var(--muted)] ${className}`}
      {...props}
    />
  );
}
