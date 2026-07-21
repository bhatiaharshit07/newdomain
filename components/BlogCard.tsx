import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Card } from "@/components/ui/Card";
import type { BlogPost } from "@/types/site";

type BlogCardProps = {
  post: BlogPost;
};

export function BlogCard({ post }: BlogCardProps) {
  const formattedDate = new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(post.date));

  return (
    <Card className="group flex min-h-[280px] flex-col justify-between p-7 transition-colors hover:border-[color:var(--foreground)]">
      <div>
        <p className="text-sm text-[color:var(--muted)]">
          {formattedDate} · {post.readTime}
        </p>
        <h3 className="mt-5 text-2xl font-semibold leading-tight text-[color:var(--foreground)]">
          {post.title}
        </h3>
        <p className="mt-4 text-base leading-7 text-[color:var(--muted)]">
          {post.excerpt}
        </p>
      </div>
      <Link
        aria-label={`Read ${post.title}`}
        className="mt-8 inline-flex size-10 items-center justify-center rounded-full border border-[color:var(--border)] text-[color:var(--foreground)] transition-colors group-hover:border-[color:var(--foreground)] group-hover:bg-[color:var(--foreground)] group-hover:text-[color:var(--background)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color:var(--accent)]"
        href="/insights"
      >
        <ArrowUpRight aria-hidden="true" size={18} />
      </Link>
    </Card>
  );
}
