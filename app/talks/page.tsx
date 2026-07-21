import type { Metadata } from "next";
import { ContentIndex } from "@/components/ContentIndex";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { Navbar } from "@/components/Navbar";
import { Section } from "@/components/Section";
import { getContentByType } from "@/lib/content";
import { getBreadcrumbSchema, getPageMetadata } from "@/lib/seo";

export const metadata: Metadata = getPageMetadata({
  title: "Speaking",
  description:
    "Talks, podcasts, panels, guest lectures, slides, and videos on Enterprise Agentic AI Systems and AI platform engineering.",
  path: "/talks",
});

export default function TalksPage() {
  const entries = getContentByType("talks");
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Speaking", url: "/talks" },
  ]);

  return (
    <main>
      <Navbar />
      <JsonLd data={breadcrumbSchema} />
      <Section
        className="pt-32"
        eyebrow="Speaking"
        title="Talks, podcasts, panels, guest lectures, slides, and videos."
      >
        <ContentIndex entries={entries} />
      </Section>
      <Footer />
    </main>
  );
}
