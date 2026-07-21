import type { Metadata } from "next";
import { ContentIndex } from "@/components/ContentIndex";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { Navbar } from "@/components/Navbar";
import { Section } from "@/components/Section";
import { getContentByType } from "@/lib/content";
import { getBreadcrumbSchema, getPageMetadata } from "@/lib/seo";

export const metadata: Metadata = getPageMetadata({
  title: "Architecture",
  description:
    "Reference architectures for Enterprise Agentic AI Systems, AI gateways, model routing, computer vision pipelines, and edge AI deployments.",
  path: "/architecture",
});

export default function ArchitecturePage() {
  const entries = getContentByType("architecture");
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Architecture", url: "/architecture" },
  ]);

  return (
    <main>
      <Navbar />
      <JsonLd data={breadcrumbSchema} />
      <Section
        className="pt-32"
        eyebrow="Architecture"
        title="Reference systems for Enterprise Agentic AI."
      >
        <ContentIndex entries={entries} />
      </Section>
      <Footer />
    </main>
  );
}
