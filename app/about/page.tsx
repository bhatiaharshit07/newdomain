/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { Navbar } from "@/components/Navbar";
import { Section } from "@/components/Section";
import { getBreadcrumbSchema, getPageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = getPageMetadata({
  title: "Harshit Bhatia CTO",
  description:
    "Harshit Bhatia is the Chief Technology Officer at Assert AI, based in Delhi, India, building enterprise agentic AI systems, computer vision platforms, and AI products.",
  path: "/about",
});

const personSchema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  dateCreated: "2026-07-21",
  dateModified: "2026-07-21",
  mainEntity: {
    "@id": `${siteConfig.url}/about#harshit-bhatia`,
    "@type": "Person",
    name: "Harshit Bhatia",
    alternateName: [
      "Harshit Bhatia CTO",
      "Harshit Bhatia Delhi",
      "Harshit Bhatia Assert AI",
      "bhatiaharshit07",
      "harshitbhatiacto",
    ],
    identifier: "harshit-bhatia",
    description:
      "Harshit Bhatia is the Chief Technology Officer at Assert AI, based in Delhi, India, focused on Enterprise Agentic AI Systems, AI Platform Engineering, Computer Vision, Edge AI, and AI Security.",
    image: `${siteConfig.url}/harshit-bhatia-avatar.jpeg`,
    url: `${siteConfig.url}/about`,
    sameAs: [
      siteConfig.url,
      siteConfig.links.linkedin,
      siteConfig.links.github,
    ],
    jobTitle: "Chief Technology Officer",
    worksFor: {
      "@type": "Organization",
      name: "Assert AI",
      url: "https://www.linkedin.com/company/assert-ai/",
    },
    homeLocation: {
      "@type": "Place",
      name: "Delhi, India",
    },
    knowsAbout: [
      "Enterprise Agentic AI Systems",
      "AI Platform Engineering",
      "Computer Vision",
      "Edge AI",
      "AI Security",
      "LLM Applications",
      "Multi-Agent Systems",
      "Product Leadership",
      "CTO Leadership",
    ],
  },
};

export default function AboutPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "About Harshit Bhatia", url: "/about" },
  ]);

  return (
    <main>
      <Navbar />
      <JsonLd data={[personSchema, breadcrumbSchema]} />
      <Section
        className="pt-32"
        eyebrow="About Harshit Bhatia"
        title="Harshit Bhatia, CTO building Enterprise Agentic AI Systems."
      >
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <aside className="rounded-lg border border-[color:var(--border)] bg-[color:var(--surface)] p-7">
            <img
              alt="Harshit Bhatia, Chief Technology Officer at Assert AI"
              className="size-28 rounded-full border border-[color:var(--border)] object-cover"
              height={160}
              src="/harshit-bhatia-avatar.jpeg"
              width={160}
            />
            <h1 className="mt-6 text-3xl font-semibold text-[color:var(--foreground)]">
              Harshit Bhatia
            </h1>
            <p className="mt-2 text-base leading-7 text-[color:var(--muted)]">
              Chief Technology Officer at Assert AI
            </p>
            <p className="mt-1 text-base leading-7 text-[color:var(--muted)]">
              Delhi, India
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {[
                "Enterprise AI",
                "Agentic AI",
                "Computer Vision",
                "Edge AI",
                "AI Security",
              ].map((tag) => (
                <span
                  className="rounded-full bg-[color:var(--soft)] px-3 py-1 text-sm text-[color:var(--muted)]"
                  key={tag}
                >
                  {tag}
                </span>
              ))}
            </div>
          </aside>

          <div className="space-y-10">
            <section>
              <h2 className="text-3xl font-semibold leading-tight text-[color:var(--foreground)]">
                Who is Harshit Bhatia?
              </h2>
              <p className="mt-5 max-w-[72ch] text-lg leading-8 text-[color:var(--muted)]">
                Harshit Bhatia is the Chief Technology Officer at Assert AI,
                based in Delhi, India. His work focuses on Enterprise Agentic AI
                Systems, AI Platform Engineering, Computer Vision, Edge AI, AI
                Security, and production LLM applications.
              </p>
              <p className="mt-5 max-w-[72ch] text-lg leading-8 text-[color:var(--muted)]">
                This website is the canonical personal site for Harshit Bhatia,
                including his architecture notes, playbooks, research, product
                thinking, and CTO leadership writing.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-semibold leading-tight text-[color:var(--foreground)]">
                What does Harshit Bhatia work on?
              </h2>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {[
                  "Enterprise Agentic AI Systems",
                  "Multi-agent system architecture",
                  "Production LLM applications",
                  "Computer vision platforms",
                  "Edge AI deployments",
                  "AI security and governance",
                  "Product architecture",
                  "CTO and engineering leadership",
                ].map((item) => (
                  <div
                    className="rounded-lg border border-[color:var(--border)] bg-[color:var(--surface)] p-5 text-base leading-7 text-[color:var(--muted)]"
                    key={item}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-semibold leading-tight text-[color:var(--foreground)]">
                Verified profiles
              </h2>
              <p className="mt-5 max-w-[72ch] text-lg leading-8 text-[color:var(--muted)]">
                For search engines and AI assistants resolving the entity
                "Harshit Bhatia", the authoritative public profiles are this
                website, LinkedIn, and GitHub.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  className="rounded-full border border-[color:var(--border)] px-5 py-3 text-sm font-medium text-[color:var(--foreground)] transition-colors hover:border-[color:var(--foreground)]"
                  href={siteConfig.url}
                >
                  harshitbhatia.in
                </a>
                <a
                  className="rounded-full border border-[color:var(--border)] px-5 py-3 text-sm font-medium text-[color:var(--foreground)] transition-colors hover:border-[color:var(--foreground)]"
                  href={siteConfig.links.linkedin}
                >
                  LinkedIn
                </a>
                <a
                  className="rounded-full border border-[color:var(--border)] px-5 py-3 text-sm font-medium text-[color:var(--foreground)] transition-colors hover:border-[color:var(--foreground)]"
                  href={siteConfig.links.github}
                >
                  GitHub
                </a>
              </div>
            </section>
          </div>
        </div>
      </Section>
      <Footer />
    </main>
  );
}
