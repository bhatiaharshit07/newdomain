import type { Metadata } from "next";
import { ContentIndex } from "@/components/ContentIndex";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { Navbar } from "@/components/Navbar";
import { Section } from "@/components/Section";
import { getContentByType } from "@/lib/content";
import { getBreadcrumbSchema, getPageMetadata } from "@/lib/seo";

export const metadata: Metadata = getPageMetadata({
  title: "Research",
  description:
    "Research, whitepapers, opinion papers, architecture notes, and case studies on Enterprise Agentic AI Systems.",
  path: "/research",
});

export default function ResearchPage() {
  const entries = getContentByType("research");
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Research", url: "/research" },
  ]);

  return (
    <main>
      <Navbar />
      <JsonLd data={breadcrumbSchema} />
      <Section
        className="pt-32"
        eyebrow="Research"
        title="Research, whitepapers, and architecture notes."
      >
        <ContentIndex entries={entries} />
      </Section>
      <Footer />
    </main>
  );
}
