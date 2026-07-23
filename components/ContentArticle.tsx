/* eslint-disable @next/next/no-img-element */
import { MDXRemote } from "next-mdx-remote/rsc";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContentCard } from "@/components/ContentCard";
import { ContentProgressBar } from "@/components/ContentProgressBar";
import { JsonLd } from "@/components/JsonLd";
import { mdxComponents } from "@/components/MdxComponents";
import { contentTypes, type ContentEntry } from "@/lib/content";
import { getContentBreadcrumbSchema } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

type ContentArticleProps = {
  entry: ContentEntry;
  related: ContentEntry[];
};

function formatContentDate(value: string) {
  return new Intl.DateTimeFormat("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${value}T00:00:00Z`));
}

export function ContentArticle({ entry, related }: ContentArticleProps) {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": entry.type === "insights" ? "BlogPosting" : "Article",
    headline: entry.title,
    description: entry.description,
    datePublished: entry.published,
    dateModified: entry.updated ?? entry.published,
    author: {
      "@type": "Person",
      "@id": `${siteConfig.url}/about#harshit-bhatia`,
      name: entry.author,
      url: `${siteConfig.url}/about`,
    },
    mainEntityOfPage: `${siteConfig.url}${entry.url}`,
    keywords: entry.tags.join(", "),
    articleSection: entry.category,
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/favicon.svg`,
      },
    },
    ...(entry.cover
      ? {
          image: [`${siteConfig.url}${entry.cover}`],
        }
      : {}),
  };
  const breadcrumbSchema = getContentBreadcrumbSchema(entry);

  return (
    <>
      <ContentProgressBar />
      <JsonLd data={[articleSchema, breadcrumbSchema]} />
      <article className="px-6 pb-24 pt-32">
        <div className="mx-auto grid w-full max-w-7xl gap-12 lg:grid-cols-[minmax(0,1fr)_280px]">
          <div>
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                {
                  label: contentTypes[entry.type].label,
                  href: contentTypes[entry.type].basePath,
                },
                { label: entry.title },
              ]}
            />
            <p className="mt-6 text-sm font-medium uppercase tracking-[0.18em] text-[color:var(--accent)]">
              {entry.category}
            </p>
            <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-[1.02] text-[color:var(--foreground)] sm:text-6xl">
              {entry.title}
            </h1>
            <p className="mt-6 max-w-[72ch] text-lg leading-8 text-[color:var(--muted)]">
              {entry.description}
            </p>
            <div className="mt-7 flex flex-col gap-5 border-y border-[color:var(--border)] py-5 sm:flex-row sm:items-center sm:justify-between">
              <a
                className="flex w-fit items-center gap-3 rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color:var(--accent)]"
                href="/about"
                rel="author"
              >
                <img
                  alt=""
                  aria-hidden="true"
                  className="size-11 rounded-full border border-[color:var(--border)] object-cover"
                  height={88}
                  src="/harshit-bhatia-avatar.jpeg"
                  width={88}
                />
                <span>
                  <span className="block text-xs uppercase tracking-[0.14em] text-[color:var(--muted)]">
                    Written by
                  </span>
                  <span className="mt-1 block text-sm font-medium text-[color:var(--foreground)]">
                    {entry.author}
                  </span>
                </span>
              </a>
              <div className="flex flex-wrap gap-x-3 gap-y-2 text-sm text-[color:var(--muted)] sm:justify-end">
                <span>
                  Published{" "}
                  <time dateTime={entry.published}>
                    {formatContentDate(entry.published)}
                  </time>
                </span>
                {entry.updated && entry.updated !== entry.published ? (
                  <>
                    <span aria-hidden="true">/</span>
                    <span>
                      Updated{" "}
                      <time dateTime={entry.updated}>
                        {formatContentDate(entry.updated)}
                      </time>
                    </span>
                  </>
                ) : null}
                <span aria-hidden="true">/</span>
                <span>{entry.readingTime} min read</span>
                {entry.difficulty ? (
                  <>
                    <span aria-hidden="true">/</span>
                    <span>{entry.difficulty}</span>
                  </>
                ) : null}
                {entry.series ? (
                  <>
                    <span aria-hidden="true">/</span>
                    <span>{entry.series}</span>
                  </>
                ) : null}
              </div>
            </div>
            {entry.cover ? (
              <figure className="mt-10 overflow-hidden rounded-lg border border-[color:var(--border)] bg-[color:var(--surface-muted)]">
                <img
                  alt={`Cover image for ${entry.title}`}
                  className="h-auto w-full object-cover"
                  height={720}
                  src={entry.cover}
                  title={`Cover image for ${entry.title}`}
                  width={1280}
                />
              </figure>
            ) : null}
            <div className="article-prose mt-12">
              <MDXRemote source={entry.body} components={mdxComponents} />
            </div>
          </div>
          <aside className="hidden lg:block">
            <div className="sticky top-28 space-y-8">
              {entry.headings.length > 0 ? (
                <nav aria-label="Table of contents">
                  <p className="text-sm font-medium uppercase tracking-[0.18em] text-[color:var(--accent)]">
                    Contents
                  </p>
                  <div className="mt-4 space-y-3">
                    {entry.headings.map((heading) => (
                      <a
                        className="block text-sm leading-6 text-[color:var(--muted)] transition-colors hover:text-[color:var(--foreground)]"
                        href={`#${heading.id}`}
                        key={heading.id}
                        title={heading.text}
                      >
                        {heading.text}
                      </a>
                    ))}
                  </div>
                </nav>
              ) : null}
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.18em] text-[color:var(--accent)]">
                  Tags
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {entry.tags.map((tag) => (
                    <span
                      className="rounded-full bg-[color:var(--soft)] px-3 py-1 text-sm text-[color:var(--muted)]"
                      key={tag}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </article>
      {related.length > 0 ? (
        <section className="border-t border-[color:var(--border)] px-6 py-24">
          <div className="mx-auto max-w-7xl">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-[color:var(--accent)]">
              Related
            </p>
            <h2 className="mt-5 text-4xl font-semibold leading-tight text-[color:var(--foreground)]">
              Continue the topic.
            </h2>
            <div className="mt-10 grid gap-4 lg:grid-cols-3">
              {related.map((item) => (
                <ContentCard entry={item} key={item.url} />
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
}
