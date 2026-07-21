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

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getContentByType("architecture").map((entry) => ({
    slug: entry.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const entry = getContentEntry("architecture", slug);

  if (!entry) {
    return {};
  }

  return {
    title: entry.seoTitle ?? entry.title,
    description: entry.seoDescription ?? entry.description,
    alternates: {
      canonical: entry.canonical ?? entry.url,
    },
  };
}

export default async function ArchitectureArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const entry = getContentEntry("architecture", slug);

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
