import {
  Boxes,
  BrainCircuit,
  Cpu,
  GitBranch,
  Network,
  Workflow,
} from "lucide-react";
import type {
  ArchitectureTopic,
  BlogPost,
  FocusItem,
  Metric,
  NavigationItem,
  Product,
  SpeakingItem,
  TimelineItem,
} from "@/types/site";

export const navigation: NavigationItem[] = [
  { label: "Products", href: "/products" },
  { label: "Architecture", href: "/architecture" },
  { label: "Knowledge", href: "/articles" },
  { label: "Speaking", href: "/talks" },
  { label: "Discussion", href: "/#contact" },
];

export const metrics: Metric[] = [
  { value: 50, suffix: "+", label: "Engineers Led" },
  { value: 30, suffix: "+", label: "Enterprise Deployments" },
  { value: 3, label: "AI Platforms Built" },
  { value: null, display: "Millions", label: "Business Events Processed" },
  { value: null, display: "Multiple", label: "Industries Served" },
  { value: null, display: "Cloud + Edge", label: "Enterprise Deployments" },
];

export const products: Product[] = [
  {
    name: "Alpha",
    title: "Enterprise Analytics Platform",
    description:
      "A decision intelligence layer for operational teams that need reliable signals from high-volume visual and business events.",
    tags: ["Computer Vision", "Event Analytics", "Enterprise AI"],
    href: "/#contact",
    visual: "alpha",
  },
  {
    name: "Pratham",
    title: "No-Code AI Builder",
    description:
      "A platform for composing AI workflows without forcing domain teams to become infrastructure specialists.",
    tags: ["No-Code", "LLMs", "Workflow Automation"],
    href: "/#contact",
    visual: "pratham",
  },
  {
    name: "LOGIX",
    title: "Warehouse Intelligence Platform",
    description:
      "Real-time visibility for warehouses, yards, and fulfillment environments where speed, accuracy, and resilience matter.",
    tags: ["Edge AI", "Warehousing", "Operations"],
    href: "/#contact",
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
  {
    label: "Multi-Agent Systems",
    icon: Network,
    href: "/architecture",
    detail: "Architectures, diagrams, code, talks",
  },
  {
    label: "LangGraph",
    icon: GitBranch,
    href: "/articles",
    detail: "Articles, patterns, implementation notes",
  },
  {
    label: "Edge AI",
    icon: Cpu,
    href: "/architecture",
    detail: "Pipelines, deployment tradeoffs, operations",
  },
  {
    label: "LLMs",
    icon: BrainCircuit,
    href: "/articles",
    detail: "Model routing, evaluation, product fit",
  },
  {
    label: "Enterprise AI",
    icon: Boxes,
    href: "/products",
    detail: "Platforms, adoption, business events",
  },
  {
    label: "Agentic Workflows",
    icon: Workflow,
    href: "/architecture",
    detail: "Memory, tools, governance, observability",
  },
];

export const writing: BlogPost[] = [
  {
    title: "The Operator Interface for Enterprise Agentic AI Systems",
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

export const architectureTopics: ArchitectureTopic[] = [
  {
    title: "Enterprise Agentic AI",
    description:
      "Reference architecture for agents, tools, memory, approvals, and enterprise controls.",
    tags: ["Diagram", "Tradeoffs", "Discussion"],
    github: "https://github.com/bhatiaharshit07",
    references: "/articles",
  },
  {
    title: "AI Gateway + Model Routing",
    description:
      "A control plane for model choice, fallback, observability, cost, and policy enforcement.",
    tags: ["Model Routing", "AI Security", "Observability"],
    github: "https://github.com/bhatiaharshit07",
    references: "/articles",
  },
  {
    title: "Computer Vision Pipeline",
    description:
      "Cloud and edge architecture for visual events, inference, streaming, and operations.",
    tags: ["Computer Vision", "Edge AI", "Events"],
    github: "https://github.com/bhatiaharshit07",
    references: "/articles",
  },
];

export const speaking: SpeakingItem[] = [
  {
    format: "Talks",
    title: "Enterprise Agentic AI Systems",
    description:
      "Practical sessions on moving agentic AI from prototypes into production.",
  },
  {
    format: "Panels",
    title: "AI Platforms, Governance, and Security",
    description:
      "Executive and engineering discussions on adoption, trust, and scale.",
  },
  {
    format: "Guest Lectures",
    title: "Computer Vision, Edge AI, and Product Engineering",
    description:
      "Sessions for builders connecting architecture decisions to business outcomes.",
  },
];
