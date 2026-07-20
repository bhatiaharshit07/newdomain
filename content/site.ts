import {
  Boxes,
  BrainCircuit,
  Cpu,
  GitBranch,
  Network,
  Workflow,
} from "lucide-react";
import type { BlogPost, FocusItem, Metric, Product, TimelineItem } from "@/types/site";

export const navigation = [
  { label: "Products", href: "#products" },
  { label: "Leadership", href: "#leadership" },
  { label: "Writing", href: "#writing" },
  { label: "Contact", href: "#contact" },
];

export const metrics: Metric[] = [
  { value: 50, suffix: "+", label: "Engineers Led" },
  { value: 30, suffix: "+", label: "Enterprise Deployments" },
  { value: 3, label: "Enterprise Platforms" },
  { value: null, display: "Millions", label: "Events Processed" },
];

export const products: Product[] = [
  {
    name: "Alpha",
    title: "Enterprise Analytics Platform",
    description:
      "A decision intelligence layer for operational teams that need reliable signals from high-volume visual and business events.",
    tags: ["Computer Vision", "Event Analytics", "Enterprise AI"],
    href: "#contact",
    visual: "alpha",
  },
  {
    name: "Pratham",
    title: "No-Code AI Builder",
    description:
      "A platform for composing AI workflows without forcing domain teams to become infrastructure specialists.",
    tags: ["No-Code", "LLMs", "Workflow Automation"],
    href: "#contact",
    visual: "pratham",
  },
  {
    name: "LOGIX",
    title: "Warehouse Intelligence Platform",
    description:
      "Real-time visibility for warehouses, yards, and fulfillment environments where speed, accuracy, and resilience matter.",
    tags: ["Edge AI", "Warehousing", "Operations"],
    href: "#contact",
    visual: "logix",
  },
];

export const timeline: TimelineItem[] = [
  {
    role: "Chief Technology Officer",
    organization: "Assert AI",
    detail:
      "Leads the technology organization across enterprise AI platforms, computer vision systems, and product engineering.",
  },
  {
    role: "Engineering Leadership",
    organization: "Scaled Teams",
    detail:
      "Builds teams that can move from ambiguous enterprise problems to dependable production systems.",
  },
  {
    role: "Enterprise Delivery",
    organization: "Applied AI",
    detail:
      "Partners with customers through deployment, integration, adoption, and measurable operational impact.",
  },
  {
    role: "Platform Engineering",
    organization: "Long-Lived Systems",
    detail:
      "Designs foundations that support product velocity without sacrificing observability, quality, or maintainability.",
  },
];

export const philosophies = [
  "Software should disappear.",
  "AI should feel effortless.",
  "Architecture matters more than velocity.",
];

export const focus: FocusItem[] = [
  { label: "Multi-Agent Systems", icon: Network },
  { label: "LangGraph", icon: GitBranch },
  { label: "Edge AI", icon: Cpu },
  { label: "LLMs", icon: BrainCircuit },
  { label: "Enterprise AI", icon: Boxes },
  { label: "Agentic Workflows", icon: Workflow },
];

export const writing: BlogPost[] = [
  {
    title: "The Operator Interface for Enterprise AI",
    excerpt:
      "Why the next wave of AI products will be judged by workflow fit, not model novelty.",
    date: "2026-07-01",
    readTime: "5 min read",
  },
  {
    title: "Computer Vision After the Demo",
    excerpt:
      "Production lessons from turning visual recognition into dependable operational software.",
    date: "2026-06-12",
    readTime: "7 min read",
  },
  {
    title: "Building Teams Around Ambiguity",
    excerpt:
      "A practical lens for hiring, architecture, and delivery when the product frontier keeps moving.",
    date: "2026-05-24",
    readTime: "4 min read",
  },
];
