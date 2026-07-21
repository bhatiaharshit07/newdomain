import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { MotionReveal } from "@/components/Motion";
import { Navbar } from "@/components/Navbar";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Research",
  description:
    "Research, whitepapers, opinion papers, architecture notes, and case studies on Enterprise Agentic AI Systems.",
};

const researchTracks = [
  {
    title: "Whitepapers",
    description:
      "Long-form analysis on Enterprise Agentic AI Systems and platform strategy.",
  },
  {
    title: "Opinion Papers",
    description:
      "Point-of-view essays on AI adoption, governance, and enterprise readiness.",
  },
  {
    title: "Architecture Notes",
    description:
      "Practical system-design notes for agents, gateways, observability, and edge AI.",
  },
  {
    title: "Case Studies",
    description:
      "Lessons from moving computer vision and agentic workflows into production.",
  },
];

export default function ResearchPage() {
  return (
    <main>
      <Navbar />
      <Section
        className="pt-32"
        eyebrow="Research"
        title="Research, whitepapers, and architecture notes."
      >
        <div className="grid gap-4 sm:grid-cols-2">
          {researchTracks.map((track, index) => (
            <MotionReveal delay={index * 0.06} key={track.title}>
              <article className="min-h-56 rounded-lg border border-[color:var(--border)] bg-[color:var(--surface)] p-7">
                <h2 className="text-2xl font-semibold leading-tight text-[color:var(--foreground)]">
                  {track.title}
                </h2>
                <p className="mt-4 text-base leading-7 text-[color:var(--muted)]">
                  {track.description}
                </p>
              </article>
            </MotionReveal>
          ))}
        </div>
      </Section>
      <Footer />
    </main>
  );
}
