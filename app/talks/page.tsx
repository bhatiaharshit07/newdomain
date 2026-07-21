import type { Metadata } from "next";
import { ContentIndex } from "@/components/ContentIndex";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Section } from "@/components/Section";
import { getContentByType } from "@/lib/content";

export const metadata: Metadata = {
  title: "Speaking",
  description:
    "Talks, podcasts, panels, guest lectures, slides, and videos on Enterprise Agentic AI Systems and AI platform engineering.",
};

export default function TalksPage() {
  const entries = getContentByType("talks");

  return (
    <main>
      <Navbar />
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
