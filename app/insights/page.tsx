import type { Metadata } from "next";
import { ContentIndex } from "@/components/ContentIndex";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Section } from "@/components/Section";
import { getContentByType } from "@/lib/content";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Evergreen insights on Enterprise AI, Agentic AI, LLMs, system design, and CTO leadership.",
};

export default function InsightsPage() {
  const entries = getContentByType("insights");

  return (
    <main>
      <Navbar />
      <Section
        className="pt-32"
        eyebrow="Insights"
        title="Evergreen thinking on Enterprise Agentic AI Systems."
      >
        <ContentIndex entries={entries} />
      </Section>
      <Footer />
    </main>
  );
}
