import { ContentCard } from "@/components/ContentCard";
import { MotionReveal } from "@/components/Motion";
import { type ContentEntry } from "@/lib/content";

type ContentIndexProps = {
  entries: ContentEntry[];
  emptyMessage?: string;
};

export function ContentIndex({
  entries,
  emptyMessage = "More content is coming soon.",
}: ContentIndexProps) {
  if (entries.length === 0) {
    return (
      <p className="rounded-lg border border-[color:var(--border)] bg-[color:var(--surface)] p-7 text-[color:var(--muted)]">
        {emptyMessage}
      </p>
    );
  }

  return (
    <div className="grid gap-4 lg:grid-cols-3">
      {entries.map((entry, index) => (
        <MotionReveal delay={index * 0.04} key={entry.url}>
          <ContentCard entry={entry} />
        </MotionReveal>
      ))}
    </div>
  );
}
