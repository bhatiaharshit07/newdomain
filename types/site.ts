import type { LucideIcon } from "lucide-react";

export type Metric = {
  value: number | null;
  suffix?: string;
  label: string;
  display?: string;
};

export type NavigationItem = {
  label: string;
  href: string;
};

export type Product = {
  name: string;
  title: string;
  description: string;
  tags: string[];
  href: string;
  visual: "alpha" | "pratham" | "logix";
};

export type TimelineItem = {
  role: string;
  organization: string;
  detail: string;
};

export type FocusItem = {
  label: string;
  icon: LucideIcon;
  href: string;
  detail: string;
};

export type BlogPost = {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
};

export type ArchitectureTopic = {
  title: string;
  description: string;
  tags: string[];
  github: string;
  references: string;
};

export type SpeakingItem = {
  format: string;
  title: string;
  description: string;
};
