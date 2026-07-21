import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { Footer } from "@/components/Footer";
import { MotionReveal } from "@/components/Motion";
import { Navbar } from "@/components/Navbar";
import { Section } from "@/components/Section";
import { Button } from "@/components/ui/Button";
import { architectureTopics } from "@/content/site";

export const metadata: Metadata = {
  title: "Architecture",
  description:
    "Reference architectures for Enterprise Agentic AI Systems, AI gateways, model routing, computer vision pipelines, and edge AI deployments.",
};

export default function ArchitecturePage() {
  return (
    <main>
      <Navbar />
      <Section
        className="pt-32"
        eyebrow="Architecture"
        title="Reference systems for Enterprise Agentic AI."
      >
        <div className="grid gap-4 lg:grid-cols-3">
          {architectureTopics.map((topic, index) => (
            <MotionReveal delay={index * 0.06} key={topic.title}>
              <article className="flex min-h-[360px] flex-col justify-between rounded-lg border border-[color:var(--border)] bg-[color:var(--surface)] p-7">
                <div>
                  <p className="text-sm font-medium uppercase tracking-[0.18em] text-[color:var(--accent)]">
                    Diagram - Explanation - Tradeoffs
                  </p>
                  <h2 className="mt-5 text-2xl font-semibold leading-tight text-[color:var(--foreground)]">
                    {topic.title}
                  </h2>
                  <p className="mt-4 text-base leading-7 text-[color:var(--muted)]">
                    {topic.description}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {topic.tags.map((tag) => (
                      <span
                        className="rounded-full bg-[color:var(--soft)] px-3 py-1 text-sm text-[color:var(--muted)]"
                        key={tag}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button
                    external
                    href={topic.github}
                    icon={ArrowUpRight}
                    variant="secondary"
                  >
                    GitHub
                  </Button>
                  <Button href="/#contact" icon={ArrowUpRight} variant="ghost">
                    Discuss
                  </Button>
                </div>
              </article>
            </MotionReveal>
          ))}
        </div>
      </Section>
      <Footer />
    </main>
  );
}
