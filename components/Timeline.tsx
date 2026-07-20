import { timeline } from "@/content/site";
import { MotionReveal } from "@/components/Motion";

export function Timeline() {
  return (
    <div className="border-l border-[color:var(--border)]">
      {timeline.map((item, index) => (
        <MotionReveal
          className="relative pb-12 pl-8 last:pb-0"
          delay={index * 0.05}
          key={`${item.role}-${item.organization}`}
        >
          <span className="absolute -left-[5px] top-2 size-2.5 rounded-full bg-[color:var(--accent)]" />
          <p className="text-sm font-medium uppercase tracking-[0.16em] text-[color:var(--accent)]">
            {item.organization}
          </p>
          <h3 className="mt-3 text-2xl font-semibold text-[color:var(--foreground)]">
            {item.role}
          </h3>
          <p className="mt-3 max-w-[66ch] text-base leading-7 text-[color:var(--muted)]">
            {item.detail}
          </p>
        </MotionReveal>
      ))}
    </div>
  );
}
