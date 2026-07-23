import type { ReactNode } from "react";
import { AnimatedHeading } from "@/components/AnimatedHeading";

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title?: string;
  children: ReactNode;
  className?: string;
  breadcrumbs?: ReactNode;
  headingLevel?: 1 | 2;
};

export function Section({
  id,
  eyebrow,
  title,
  children,
  className = "",
  breadcrumbs,
  headingLevel = 2,
}: SectionProps) {
  return (
    <section className={`px-6 py-24 sm:py-32 ${className}`} id={id}>
      <div className="mx-auto w-full max-w-7xl">
        {eyebrow || title ? (
          <div className="mb-12 max-w-3xl">
            {breadcrumbs ? <div className="mb-6">{breadcrumbs}</div> : null}
            {eyebrow ? (
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.18em] text-[color:var(--accent)]">
                {eyebrow}
              </p>
            ) : null}
            {title ? (
              <AnimatedHeading
                as={headingLevel === 1 ? "h1" : "h2"}
                className="text-4xl font-semibold leading-[1.05] text-[color:var(--foreground)] sm:text-5xl"
              >
                {title}
              </AnimatedHeading>
            ) : null}
          </div>
        ) : null}
        {children}
      </div>
    </section>
  );
}
