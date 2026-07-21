import type { Metadata } from "next";
import { ContentIndex } from "@/components/ContentIndex";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Section } from "@/components/Section";
import { getContentByType } from "@/lib/content";

export const metadata: Metadata = {
  title: "Research",
  description:
    "Research, whitepapers, opinion papers, architecture notes, and case studies on Enterprise Agentic AI Systems.",
};

export default function ResearchPage() {
  const entries = getContentByType("research");

  return (
    <main>
      <Navbar />
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
