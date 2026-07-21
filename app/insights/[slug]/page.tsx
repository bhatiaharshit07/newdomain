import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ContentArticle } from "@/components/ContentArticle";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import {
  getContentByType,
  getContentEntry,
  getRelatedContent,
} from "@/lib/content";
import { getContentMetadata } from "@/lib/seo";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getContentByType("insights").map((entry) => ({ slug: entry.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const entry = getContentEntry("insights", slug);

  if (!entry) {
    return {};
  }

  return getContentMetadata(entry);
}

export default async function InsightPage({ params }: PageProps) {
  const { slug } = await params;
  const entry = getContentEntry("insights", slug);

  if (!entry) {
    notFound();
  }

  return (
    <main>
      <Navbar />
      <ContentArticle entry={entry} related={getRelatedContent(entry)} />
      <Footer />
    </main>
  );
}
