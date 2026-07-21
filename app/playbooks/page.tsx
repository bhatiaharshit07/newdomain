import type { Metadata } from "next";
import { ContentIndex } from "@/components/ContentIndex";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Section } from "@/components/Section";
import { getContentByType } from "@/lib/content";

export const metadata: Metadata = {
  title: "Playbooks",
  description:
    "Practical playbooks for building production LLM apps, Enterprise Agentic AI Systems, and AI platforms.",
};

export default function PlaybooksPage() {
  const entries = getContentByType("playbooks");

  return (
    <main>
      <Navbar />
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
