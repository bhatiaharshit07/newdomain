import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContentIndex } from "@/components/ContentIndex";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { Navbar } from "@/components/Navbar";
import { Section } from "@/components/Section";
import { getContentByType } from "@/lib/content";
import { getBreadcrumbSchema, getPageMetadata } from "@/lib/seo";

export const metadata: Metadata = getPageMetadata({
  title: "Enterprise AI & Agentic Systems Insights",
  description:
    "Evergreen insights on Enterprise AI, Agentic AI, LLMs, system design, and CTO leadership.",
  path: "/insights",
});

export default function InsightsPage() {
  const entries = getContentByType("insights");
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Insights", url: "/insights" },
  ]);

  return (
    <main>
      <Navbar />
      <JsonLd data={breadcrumbSchema} />
      <Section
        breadcrumbs={
          <Breadcrumbs
            items={[{ label: "Home", href: "/" }, { label: "Insights" }]}
          />
        }
        className="pt-32"
        eyebrow="Insights"
        headingLevel={1}
        title="Evergreen thinking on Enterprise Agentic AI Systems."
      >
        <ContentIndex entries={entries} />
      </Section>
      <Footer />
    </main>
  );
}
