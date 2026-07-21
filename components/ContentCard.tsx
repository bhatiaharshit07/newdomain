/* eslint-disable @next/next/no-img-element */
import { ArrowUpRight } from "lucide-react";
import { contentTypes, type ContentEntry } from "@/lib/content";

type ContentCardProps = {
  entry: ContentEntry;
};

export function ContentCard({ entry }: ContentCardProps) {
  return (
    <article className="group flex min-h-[300px] flex-col justify-between rounded-lg border border-[color:var(--border)] bg-[color:var(--surface)] p-7 transition-colors hover:border-[color:var(--foreground)]">
      <div>
        {entry.cover ? (
          <div className="mb-6 overflow-hidden rounded-lg border border-[color:var(--border)] bg-[color:var(--surface-muted)]">
            <img
              alt={`Cover image for ${entry.title}`}
              className="aspect-[16/9] w-full object-cover"
              height={360}
              loading="lazy"
              src={entry.cover}
              width={640}
            />
          </div>
        ) : null}
        <div className="flex flex-wrap items-center gap-2 text-sm text-[color:var(--muted)]">
          <span>{contentTypes[entry.type].label}</span>
          <span aria-hidden="true">/</span>
          <span>{entry.category}</span>
          <span aria-hidden="true">/</span>
          <span>{entry.readingTime} min read</span>
        </div>
        <h2 className="mt-5 text-2xl font-semibold leading-tight text-[color:var(--foreground)]">
          {entry.title}
        </h2>
        <p className="mt-4 text-base leading-7 text-[color:var(--muted)]">
          {entry.description}
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {entry.tags.slice(0, 4).map((tag) => (
            <span
              className="rounded-full bg-[color:var(--soft)] px-3 py-1 text-sm text-[color:var(--muted)]"
              key={tag}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <a
        aria-label={`Read ${entry.title}`}
        className="mt-8 inline-flex size-10 items-center justify-center rounded-full border border-[color:var(--border)] text-[color:var(--foreground)] transition-colors group-hover:border-[color:var(--foreground)] group-hover:bg-[color:var(--foreground)] group-hover:text-[color:var(--background)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color:var(--accent)]"
        href={entry.url}
      >
        <span className="sr-only">Read {entry.title}</span>
        <ArrowUpRight aria-hidden="true" size={18} />
      </a>
    </article>
  );
}
