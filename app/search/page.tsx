import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContentIndex } from "@/components/ContentIndex";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Section } from "@/components/Section";
import { getAllContent } from "@/lib/content";

export const metadata: Metadata = {
  title: "Search",
  description:
    "Search Harshit Bhatia's writing on Enterprise AI, Agentic AI, architecture, LLMs, computer vision, and CTO leadership.",
  robots: {
    index: false,
    follow: true,
  },
};

type SearchPageProps = {
  searchParams: Promise<{ q?: string }>;
};

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const { q } = await searchParams;
  const query = (q ?? "").trim().toLowerCase();
  const entries = query
    ? getAllContent().filter((entry) => {
        const haystack = [
          entry.title,
          entry.description,
          entry.category,
          entry.tags.join(" "),
          entry.body,
        ]
          .join(" ")
          .toLowerCase();

        return haystack.includes(query);
      })
    : [];

  return (
    <main>
      <Navbar />
      <Section
        breadcrumbs={
          <Breadcrumbs
            items={[{ label: "Home", href: "/" }, { label: "Search" }]}
          />
        }
        className="pt-32"
        eyebrow="Search"
        headingLevel={1}
        title="Search the knowledge library."
      >
        <form
          action="/search"
          className="mb-10 flex flex-col gap-3 sm:flex-row"
        >
          <input
            aria-label="Search query"
            className="min-h-11 flex-1 rounded-full border border-[color:var(--border)] bg-[color:var(--surface)] px-5 text-sm text-[color:var(--foreground)] outline-none transition-colors placeholder:text-[color:var(--muted)] focus:border-[color:var(--foreground)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color:var(--accent)]"
            defaultValue={q}
            name="q"
            placeholder="Search Agentic AI, RAG, LLMs, architecture..."
            type="search"
          />
          <button className="inline-flex min-h-11 items-center justify-center rounded-full bg-[color:var(--foreground)] px-5 text-sm font-medium text-[color:var(--background)] transition-colors hover:bg-[color:var(--accent)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color:var(--accent)]">
            Search
          </button>
        </form>
        <ContentIndex
          emptyMessage={
            query
              ? "No matching content yet. Try another topic."
              : "Enter a topic to search across insights, architectures, playbooks, research, projects, and talks."
          }
          entries={entries}
        />
      </Section>
      <Footer />
    </main>
  );
}
