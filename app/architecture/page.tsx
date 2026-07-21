import type { Metadata } from "next";
import { ContentIndex } from "@/components/ContentIndex";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Section } from "@/components/Section";
import { getContentByType } from "@/lib/content";

export const metadata: Metadata = {
  title: "Architecture",
  description:
    "Reference architectures for Enterprise Agentic AI Systems, AI gateways, model routing, computer vision pipelines, and edge AI deployments.",
};

export default function ArchitecturePage() {
  const entries = getContentByType("architecture");

  return (
    <main>
      <Navbar />
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
