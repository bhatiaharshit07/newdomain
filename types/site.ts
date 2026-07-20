import type { LucideIcon } from "lucide-react";

export type Metric = {
  value: number | null;
  suffix?: string;
  label: string;
  display?: string;
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
};

export type BlogPost = {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
};
