import type { Metadata } from "next";
import { ContentIndex } from "@/components/ContentIndex";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { Navbar } from "@/components/Navbar";
import { Section } from "@/components/Section";
import { getContentByType } from "@/lib/content";
import { getBreadcrumbSchema, getPageMetadata } from "@/lib/seo";

export const metadata: Metadata = getPageMetadata({
  title: "Playbooks",
  description:
    "Practical playbooks for building production LLM apps, Enterprise Agentic AI Systems, and AI platforms.",
  path: "/playbooks",
});

export default function PlaybooksPage() {
  const entries = getContentByType("playbooks");
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Playbooks", url: "/playbooks" },
  ]);

  return (
    <main>
      <Navbar />
      <JsonLd data={breadcrumbSchema} />
      <Section
        className="pt-32"
        eyebrow="Playbooks"
        title="Production guides for AI builders."
      >
        <ContentIndex entries={entries} />
      </Section>
      <Footer />
    </main>
  );
}
