import type { Metadata } from "next";
import { ContentIndex } from "@/components/ContentIndex";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { Navbar } from "@/components/Navbar";
import { Section } from "@/components/Section";
import { getContentByType } from "@/lib/content";
import { getBreadcrumbSchema, getPageMetadata } from "@/lib/seo";

export const metadata: Metadata = getPageMetadata({
  title: "Projects",
  description:
    "Project architecture notes for Alpha, Pratham, LOGIX, computer vision platforms, and enterprise AI systems.",
  path: "/projects",
});

export default function ProjectsPage() {
  const entries = getContentByType("projects");
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Projects", url: "/projects" },
  ]);

  return (
    <main>
      <Navbar />
      <JsonLd data={breadcrumbSchema} />
      <Section
        className="pt-32"
        eyebrow="Projects"
        title="Product and platform architecture notes."
      >
        <ContentIndex entries={entries} />
      </Section>
      <Footer />
    </main>
  );
}
