import type { Metadata } from "next";
import { BlogCard } from "@/components/BlogCard";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Section } from "@/components/Section";
import { writing } from "@/content/site";

export const metadata: Metadata = {
  title: "Articles",
  description:
    "Articles and knowledge notes on Enterprise Agentic AI Systems, AI platform engineering, computer vision, Edge AI, and AI security.",
};

export default function ArticlesPage() {
  return (
    <main>
      <Navbar />
      <Section
        className="pt-32"
        eyebrow="Articles"
        title="Knowledge for builders of Enterprise Agentic AI Systems."
      >
        <div className="grid gap-4 lg:grid-cols-3">
          {writing.map((post) => (
            <BlogCard key={post.title} post={post} />
          ))}
        </div>
      </Section>
      <Footer />
    </main>
  );
}
