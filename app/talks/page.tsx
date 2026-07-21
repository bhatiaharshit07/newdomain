import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { MotionReveal } from "@/components/Motion";
import { Navbar } from "@/components/Navbar";
import { Section } from "@/components/Section";
import { speaking } from "@/content/site";

export const metadata: Metadata = {
  title: "Speaking",
  description:
    "Talks, podcasts, panels, guest lectures, slides, and videos on Enterprise Agentic AI Systems and AI platform engineering.",
};

export default function TalksPage() {
  return (
    <main>
      <Navbar />
      <Section
        className="pt-32"
        eyebrow="Speaking"
        title="Talks, podcasts, panels, guest lectures, slides, and videos."
      >
        <div className="grid gap-4 lg:grid-cols-3">
          {speaking.map((item, index) => (
            <MotionReveal delay={index * 0.06} key={item.title}>
              <article className="min-h-64 rounded-lg border border-[color:var(--border)] bg-[color:var(--surface)] p-7">
                <p className="text-sm font-medium uppercase tracking-[0.18em] text-[color:var(--accent)]">
                  {item.format}
                </p>
                <h2 className="mt-5 text-2xl font-semibold leading-tight text-[color:var(--foreground)]">
                  {item.title}
                </h2>
                <p className="mt-4 text-base leading-7 text-[color:var(--muted)]">
                  {item.description}
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
