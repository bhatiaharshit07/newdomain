import {
  Activity,
  Blocks,
  Building2,
  CloudCog,
  Factory,
  UsersRound,
} from "lucide-react";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { MotionReveal } from "@/components/Motion";
import { metrics } from "@/content/site";

const metricIcons = [
  UsersRound,
  Building2,
  Blocks,
  Activity,
  Factory,
  CloudCog,
];

export function MetricGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {metrics.map((metric, index) => (
        <MotionReveal delay={index * 0.06} key={metric.label}>
          <MetricCard
            icon={metricIcons[index]}
            index={index}
            label={metric.label}
          >
            <AnimatedCounter
              display={metric.display}
              suffix={metric.suffix}
              value={metric.value}
            />
          </MetricCard>
        </MotionReveal>
      ))}
    </div>
  );
}

type MetricCardProps = {
  children: React.ReactNode;
  icon: (typeof metricIcons)[number];
  index: number;
  label: string;
};

function MetricCard({ children, icon: Icon, index, label }: MetricCardProps) {
  const isPrimary = index === 0;

  return (
    <article
      className={`group relative flex min-h-44 overflow-hidden rounded-lg border p-6 transition-colors ${
        isPrimary
          ? "border-[color:var(--foreground)] bg-[color:var(--foreground)] text-[color:var(--background)]"
          : "border-[color:var(--border)] bg-[color:var(--surface)] text-[color:var(--foreground)] hover:border-[color:var(--foreground)]"
      }`}
    >
      <div className="flex w-full flex-col justify-between gap-8">
        <div className="flex items-start justify-between gap-4">
          <span
            className={`inline-flex size-10 items-center justify-center rounded-full ${
              isPrimary
                ? "bg-[color:var(--background)]/12 text-[color:var(--background)]"
                : "bg-[color:var(--soft)] text-[color:var(--accent)]"
            }`}
          >
            <Icon aria-hidden="true" size={19} strokeWidth={1.75} />
          </span>
          <span
            aria-hidden="true"
            className={`h-px flex-1 translate-y-5 ${
              isPrimary
                ? "bg-[color:var(--background)]/18"
                : "bg-[color:var(--border)]"
            }`}
          />
        </div>
        <div>
          <p className="text-[40px] font-semibold leading-none tracking-normal sm:text-5xl">
            {children}
          </p>
          <p
            className={`mt-4 max-w-[18rem] text-sm leading-6 ${
              isPrimary
                ? "text-[color:var(--background)]/72"
                : "text-[color:var(--muted)]"
            }`}
          >
            {label}
          </p>
        </div>
      </div>
    </article>
  );
}
