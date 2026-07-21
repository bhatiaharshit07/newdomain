import type { Metadata } from "next";
import { ContentIndex } from "@/components/ContentIndex";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Section } from "@/components/Section";
import { getContentByType } from "@/lib/content";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Project architecture notes for Alpha, Pratham, LOGIX, computer vision platforms, and enterprise AI systems.",
};

export default function ProjectsPage() {
  const entries = getContentByType("projects");

  return (
    <main>
      <Navbar />
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
