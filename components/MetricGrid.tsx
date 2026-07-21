import { AnimatedCounter } from "@/components/AnimatedCounter";
import { Card } from "@/components/ui/Card";
import { MotionReveal } from "@/components/Motion";
import { metrics } from "@/content/site";

export function MetricGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
      {metrics.map((metric, index) => (
        <MotionReveal delay={index * 0.06} key={metric.label}>
          <Card className="p-6">
            <p className="text-4xl font-semibold leading-none text-[color:var(--foreground)]">
              <AnimatedCounter
                display={metric.display}
                suffix={metric.suffix}
                value={metric.value}
              />
            </p>
            <p className="mt-4 text-sm text-[color:var(--muted)]">
              {metric.label}
            </p>
          </Card>
        </MotionReveal>
      ))}
    </div>
  );
}
