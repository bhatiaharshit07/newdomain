/* eslint-disable @next/next/no-img-element */
import { ArrowDown } from "lucide-react";
import { ContentIndex } from "@/components/ContentIndex";
import { Footer } from "@/components/Footer";
import { MetricGrid } from "@/components/MetricGrid";
import { MotionReveal } from "@/components/Motion";
import { Navbar } from "@/components/Navbar";
import { ProductCard } from "@/components/ProductCard";
import { Section } from "@/components/Section";
import { SocialLinks } from "@/components/SocialLinks";
import { Timeline } from "@/components/Timeline";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { focus, philosophies, products, speaking } from "@/content/site";
import { getContentByType, getFeaturedContent } from "@/lib/content";
import { siteConfig } from "@/lib/site";

export default function Home() {
  const architectureEntries = getContentByType("architecture").slice(0, 3);
  const featuredContent = getFeaturedContent(6)
    .filter((entry) => entry.type !== "architecture")
    .slice(0, 3);

  return (
    <main id="top">
      <Navbar />
      <section className="relative flex min-h-screen items-center px-6 pb-16 pt-20 sm:pt-24">
        <div className="mx-auto flex w-full max-w-7xl -translate-y-6 flex-col items-center text-center sm:-translate-y-8">
          <MotionReveal>
            <Badge>Enterprise AI · Computer Vision · Agentic Systems</Badge>
          </MotionReveal>
          <h1 className="mt-8 max-w-5xl text-[48px] font-semibold leading-[0.95] tracking-normal text-[color:var(--foreground)] sm:text-7xl lg:text-[96px]">
            Harshit Bhatia builds Enterprise Agentic AI Systems that scale.
          </h1>
          <div className="mt-8 flex items-center justify-center gap-4">
            <div aria-hidden="true" className="hero-avatar">
              <img
                alt="Harshit Bhatia, Chief Technology Officer at Assert AI"
                className="object-cover"
                fetchPriority="high"
                height={160}
                src="/harshit-bhatia-avatar.jpeg"
                title="Harshit Bhatia, Chief Technology Officer at Assert AI"
                width={160}
              />
            </div>
            <div className="max-w-[50ch] space-y-1 text-left">
              <p className="text-xl font-medium text-[color:var(--foreground)] sm:text-2xl">
                Enterprise Agentic AI CTO &amp; Architect
              </p>
              <p className="text-base text-[color:var(--muted)] sm:text-lg">
                Chief Technology Officer at Assert AI
              </p>
              <p className="text-sm leading-6 text-[color:var(--muted)] sm:text-base">
                Harshit Bhatia is a CTO and architect specializing in Enterprise
                Agentic AI Systems, AI Platform Engineering, Computer Vision,
                Edge AI, and AI Security.
              </p>
            </div>
          </div>
          <MotionReveal delay={0.18}>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href="/products">View Products</Button>
            </div>
          </MotionReveal>
        </div>
        <a
          aria-label="Scroll to mission statement"
          className="absolute bottom-8 left-1/2 inline-flex size-11 -translate-x-1/2 items-center justify-center rounded-full border border-[color:var(--border)] text-[color:var(--muted)] transition-colors hover:text-[color:var(--foreground)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color:var(--accent)]"
          href="#mission"
          title="Scroll to mission statement"
        >
          <span className="sr-only">Scroll to mission statement</span>
          <ArrowDown aria-hidden="true" size={18} />
        </a>
      </section>

      <section
        className="flex min-h-screen items-center border-y border-[color:var(--border)] bg-[color:var(--surface-muted)] px-6 py-24"
        id="mission"
      >
        <div className="mx-auto max-w-7xl">
          <MotionReveal>
            <p className="max-w-5xl text-5xl font-semibold leading-[1.06] text-[color:var(--foreground)] sm:text-6xl lg:text-7xl">
              I build enterprise agentic AI systems that turn models, workflows,
              computer vision, and edge deployments into durable business
              infrastructure.
            </p>
          </MotionReveal>
        </div>
      </section>

      <Section eyebrow="Scale" title="Systems that leave the demo room.">
        <MetricGrid />
      </Section>

      <Section
        className="border-y border-[color:var(--border)] bg-[color:var(--surface)]"
        eyebrow="Profile"
        title="Enterprise AI leadership in context."
      >
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <MotionReveal>
            <p className="max-w-[58ch] text-xl leading-8 text-[color:var(--foreground)]">
              Harshit Bhatia is the Chief Technology Officer at Assert AI,
              based in Delhi, India, focused on building Enterprise Agentic AI
              Systems that move from strategy and architecture into production
              operations.
            </p>
          </MotionReveal>
          <div className="grid gap-6 text-base leading-7 text-[color:var(--muted)] sm:grid-cols-2">
            <MotionReveal delay={0.04}>
              <p>
                His work connects AI platform engineering, computer vision,
                edge AI, LLM applications, workflow automation, and AI security
                into systems that teams can operate, observe, govern, and scale.
              </p>
            </MotionReveal>
            <MotionReveal delay={0.08}>
              <p>
                The operating focus is practical: define the right enterprise
                use case, design the product boundary, build reliable data and
                model pipelines, add guardrails, and measure whether the system
                improves business outcomes.
              </p>
            </MotionReveal>
            <MotionReveal delay={0.12}>
              <p>
                This site collects his reference architectures, AI playbooks,
                product notes, research, and CTO leadership writing for builders
                working on agentic products, multi-agent systems, Enterprise
                RAG, AI gateways, and production LLM platforms.
              </p>
            </MotionReveal>
            <MotionReveal delay={0.16}>
              <p>
                The goal is long-term technical compounding: infrastructure that
                remains dependable after the demo, product decisions that survive
                customer complexity, and AI interfaces that become partners in
                real operational work.
              </p>
            </MotionReveal>
          </div>
        </div>
      </Section>

      <Section
        eyebrow="Enterprise AI Practice"
        title="How I approach durable agentic systems."
      >
        <div className="grid gap-4 lg:grid-cols-3">
          <MotionReveal>
            <article className="h-full rounded-lg border border-[color:var(--border)] bg-[color:var(--surface-muted)] p-7">
              <h3 className="text-2xl font-semibold leading-tight text-[color:var(--foreground)]">
                Product before prototypes
              </h3>
              <p className="mt-4 text-base leading-7 text-[color:var(--muted)]">
                Enterprise AI succeeds when models are shaped into reliable
                product workflows. I focus on use-case selection, system
                boundaries, measurable outcomes, and adoption paths so agentic
                interfaces solve real operational problems instead of becoming
                isolated demos.
              </p>
            </article>
          </MotionReveal>
          <MotionReveal delay={0.06}>
            <article className="h-full rounded-lg border border-[color:var(--border)] bg-[color:var(--surface-muted)] p-7">
              <h3 className="text-2xl font-semibold leading-tight text-[color:var(--foreground)]">
                Architecture with guardrails
              </h3>
              <p className="mt-4 text-base leading-7 text-[color:var(--muted)]">
                Production AI systems need observability, evaluation, security,
                human approval, and rollback paths from the beginning. My work
                connects LLMs, computer vision, edge pipelines, data platforms,
                and business systems through architecture that can be trusted.
              </p>
            </article>
          </MotionReveal>
          <MotionReveal delay={0.12}>
            <article className="h-full rounded-lg border border-[color:var(--border)] bg-[color:var(--surface-muted)] p-7">
              <h3 className="text-2xl font-semibold leading-tight text-[color:var(--foreground)]">
                Leadership through ambiguity
              </h3>
              <p className="mt-4 text-base leading-7 text-[color:var(--muted)]">
                As CTO, the hard part is not only choosing technology. It is
                building teams that can make tradeoffs, say no to distracting
                work, and keep compounding platforms while customers, products,
                and AI capabilities keep changing.
              </p>
            </article>
          </MotionReveal>
        </div>
      </Section>

      <Section
        className="border-y border-[color:var(--border)] bg-[color:var(--surface-muted)]"
        eyebrow="Products"
        id="products"
        title="Built for operational reality."
      >
        <div className="space-y-8">
          {products.map((product, index) => (
            <ProductCard
              key={product.name}
              product={product}
              reverse={index % 2 === 1}
            />
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Architecture"
        id="architecture"
        title="Reference systems for enterprise AI."
      >
        <ContentIndex entries={architectureEntries} />
      </Section>

      <Section
        eyebrow="Leadership"
        id="leadership"
        title="From architecture to adoption."
      >
        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr]">
          <MotionReveal>
            <p className="max-w-[64ch] text-lg leading-8 text-[color:var(--muted)]">
              The work is not only choosing models or shipping features. It is
              building teams, platforms, and customer trust so applied AI can
              become durable business infrastructure.
            </p>
          </MotionReveal>
          <Timeline />
        </div>
      </Section>

      <Section className="border-y border-[color:var(--border)] bg-[color:var(--foreground)] text-[color:var(--background)]">
        <div className="grid gap-6 lg:grid-cols-3">
          {philosophies.map((quote, index) => (
            <MotionReveal
              className="border-t border-white/25 pt-8"
              delay={index * 0.08}
              key={quote}
            >
              <blockquote className="text-3xl font-semibold leading-tight sm:text-4xl">
                {quote}
              </blockquote>
            </MotionReveal>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Current Focus"
        title="Where the frontier is getting useful."
      >
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {focus.map((item, index) => {
            const Icon = item.icon;
            return (
              <MotionReveal delay={index * 0.04} key={item.label}>
                <a
                  className="group flex min-h-32 items-center gap-4 rounded-lg border border-[color:var(--border)] bg-[color:var(--surface)] p-5 transition-colors hover:border-[color:var(--foreground)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color:var(--accent)]"
                  href={item.href}
                  title={item.label}
                >
                  <span className="inline-flex size-11 items-center justify-center rounded-full bg-[color:var(--soft)] text-[color:var(--accent)]">
                    <Icon aria-hidden="true" size={20} strokeWidth={1.75} />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-lg font-medium text-[color:var(--foreground)]">
                      {item.label} <span aria-hidden="true">-&gt;</span>
                    </span>
                    <span className="mt-1 block text-sm leading-6 text-[color:var(--muted)]">
                      {item.detail}
                    </span>
                  </span>
                </a>
              </MotionReveal>
            );
          })}
        </div>
      </Section>

      <Section
        className="border-y border-[color:var(--border)] bg-[color:var(--surface-muted)]"
        eyebrow="Insights"
        id="knowledge"
        title="Notes for builders of enterprise agentic AI systems."
      >
        <ContentIndex entries={featuredContent} />
      </Section>

      <Section
        eyebrow="Speaking"
        id="speaking"
        title="Talks, panels, and guest lectures."
      >
        <div className="grid gap-4 lg:grid-cols-3">
          {speaking.map((item, index) => (
            <MotionReveal delay={index * 0.06} key={item.title}>
              <article className="min-h-64 rounded-lg border border-[color:var(--border)] bg-[color:var(--surface)] p-7">
                <p className="text-sm font-medium uppercase tracking-[0.18em] text-[color:var(--accent)]">
                  {item.format}
                </p>
                <h3 className="mt-5 text-2xl font-semibold leading-tight text-[color:var(--foreground)]">
                  {item.title}
                </h3>
                <p className="mt-4 text-base leading-7 text-[color:var(--muted)]">
                  {item.description}
                </p>
              </article>
            </MotionReveal>
          ))}
        </div>
      </Section>

      <Section
        className="border-y border-[color:var(--border)] bg-[color:var(--surface-muted)]"
        eyebrow="Newsletter"
        id="newsletter"
        title="Enterprise AI Notes"
      >
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <MotionReveal>
            <p className="max-w-[62ch] text-lg leading-8 text-[color:var(--muted)]">
              Monthly insights on Enterprise Agentic AI Systems, architecture
              tradeoffs, AI platform engineering, computer vision, edge AI, and
              security. No spam.
            </p>
          </MotionReveal>
          <MotionReveal delay={0.08}>
            <div className="flex justify-start lg:justify-end">
              <Button
                href={`${siteConfig.links.email}?subject=Enterprise%20AI%20Notes`}
              >
                Request Enterprise AI Notes
              </Button>
            </div>
          </MotionReveal>
        </div>
      </Section>

      <Section id="contact">
        <div className="mx-auto max-w-4xl text-center">
          <MotionReveal>
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-[color:var(--accent)]">
              Start a Discussion
            </p>
            <h2 className="mt-5 text-5xl font-semibold leading-[1.05] text-[color:var(--foreground)] sm:text-6xl">
              Let&apos;s discuss Enterprise AI.
            </h2>
            <p className="mx-auto mt-6 max-w-[62ch] text-lg leading-8 text-[color:var(--muted)]">
              For enterprise AI strategy, product leadership, computer vision
              platforms, and agentic workflow systems.
            </p>
          </MotionReveal>
          <div className="mt-10">
            <SocialLinks />
          </div>
        </div>
      </Section>
      <Footer />
    </main>
  );
}
