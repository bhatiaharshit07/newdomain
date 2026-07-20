import { ArrowDown, Download } from "lucide-react";
import { BlogCard } from "@/components/BlogCard";
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
import { focus, philosophies, products, writing } from "@/content/site";
import { siteConfig } from "@/lib/site";

export default function Home() {
  return (
    <main id="top">
      <Navbar />
      <section className="relative flex min-h-screen items-center px-6 pb-20 pt-28">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center text-center">
          <MotionReveal>
            <Badge>Enterprise AI · Computer Vision · Agentic Systems</Badge>
          </MotionReveal>
          <MotionReveal delay={0.06}>
            <h1 className="mt-8 max-w-5xl text-[48px] font-semibold leading-[0.95] tracking-normal text-[color:var(--foreground)] sm:text-7xl lg:text-[96px]">
              Building Enterprise AI that scales.
            </h1>
          </MotionReveal>
          <MotionReveal delay={0.12}>
            <div className="mt-8 space-y-2">
              <p className="text-xl font-medium text-[color:var(--foreground)] sm:text-2xl">
                Harshit Bhatia
              </p>
              <p className="text-base text-[color:var(--muted)] sm:text-lg">
                Chief Technology Officer
              </p>
            </div>
          </MotionReveal>
          <MotionReveal delay={0.18}>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href="#products">View Products</Button>
              <Button href={siteConfig.links.resume} icon={Download} variant="secondary" download>
                Download Resume
              </Button>
            </div>
          </MotionReveal>
        </div>
        <a
          aria-label="Scroll to mission statement"
          className="absolute bottom-8 left-1/2 inline-flex size-11 -translate-x-1/2 items-center justify-center rounded-full border border-[color:var(--border)] text-[color:var(--muted)] transition-colors hover:text-[color:var(--foreground)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color:var(--accent)]"
          href="#mission"
        >
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
              I build AI products used by enterprises every single day.
            </p>
          </MotionReveal>
        </div>
      </section>

      <Section eyebrow="Scale" title="Systems that leave the demo room.">
        <MetricGrid />
      </Section>

      <Section
        className="border-y border-[color:var(--border)] bg-[color:var(--surface-muted)]"
        eyebrow="Products"
        id="products"
        title="Built for operational reality."
      >
        <div className="space-y-8">
          {products.map((product, index) => (
            <ProductCard key={product.name} product={product} reverse={index % 2 === 1} />
          ))}
        </div>
      </Section>

      <Section eyebrow="Leadership" id="leadership" title="From architecture to adoption.">
        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr]">
          <MotionReveal>
            <p className="max-w-[64ch] text-lg leading-8 text-[color:var(--muted)]">
              The work is not only choosing models or shipping features. It is building teams,
              platforms, and customer trust so applied AI can become durable business
              infrastructure.
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

      <Section eyebrow="Current Focus" title="Where the frontier is getting useful.">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {focus.map((item, index) => {
            const Icon = item.icon;
            return (
              <MotionReveal delay={index * 0.04} key={item.label}>
                <div className="flex min-h-24 items-center gap-4 rounded-lg border border-[color:var(--border)] bg-[color:var(--surface)] p-5">
                  <span className="inline-flex size-11 items-center justify-center rounded-full bg-[color:var(--soft)] text-[color:var(--accent)]">
                    <Icon aria-hidden="true" size={20} strokeWidth={1.75} />
                  </span>
                  <span className="text-lg font-medium text-[color:var(--foreground)]">
                    {item.label}
                  </span>
                </div>
              </MotionReveal>
            );
          })}
        </div>
      </Section>

      <Section
        className="border-y border-[color:var(--border)] bg-[color:var(--surface-muted)]"
        eyebrow="Writing"
        id="writing"
        title="Notes for builders of real AI products."
      >
        <div className="grid gap-4 lg:grid-cols-3">
          {writing.map((post) => (
            <BlogCard key={post.title} post={post} />
          ))}
        </div>
      </Section>

      <Section id="contact">
        <div className="mx-auto max-w-4xl text-center">
          <MotionReveal>
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-[color:var(--accent)]">
              Contact
            </p>
            <h2 className="mt-5 text-5xl font-semibold leading-[1.05] text-[color:var(--foreground)] sm:text-6xl">
              Let&apos;s build something meaningful.
            </h2>
            <p className="mx-auto mt-6 max-w-[62ch] text-lg leading-8 text-[color:var(--muted)]">
              For enterprise AI strategy, product leadership, computer vision platforms, and
              agentic workflow systems.
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
