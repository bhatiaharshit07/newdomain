import type { LucideIcon } from "lucide-react";
import type { AnchorHTMLAttributes, ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href: string;
  variant?: "primary" | "secondary" | "ghost";
  icon?: LucideIcon;
  external?: boolean;
  download?: boolean;
  "aria-label"?: string;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "children">;

const variants = {
  primary:
    "bg-[color:var(--foreground)] text-[color:var(--background)] hover:bg-[color:var(--accent)]",
  secondary:
    "border border-[color:var(--border)] bg-[color:var(--surface)] text-[color:var(--foreground)] hover:border-[color:var(--foreground)]",
  ghost:
    "text-[color:var(--muted)] hover:bg-[color:var(--soft)] hover:text-[color:var(--foreground)]",
};

export function Button({
  children,
  href,
  variant = "primary",
  icon: Icon,
  external,
  className = "",
  ...props
}: ButtonProps) {
  return (
    <a
      className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color:var(--accent)] ${variants[variant]} ${className}`}
      href={href}
      rel={external ? "noreferrer" : undefined}
      target={external ? "_blank" : undefined}
      {...props}
    >
      {Icon ? <Icon aria-hidden="true" size={18} strokeWidth={1.75} /> : null}
      <span>{children}</span>
    </a>
  );
}
