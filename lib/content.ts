import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import readingTime from "reading-time";
import { siteConfig } from "@/lib/site";

export const contentTypes = {
  insights: {
    directory: "insights",
    basePath: "/insights",
    label: "Insights",
  },
  architecture: {
    directory: "architectures",
    basePath: "/architecture",
    label: "Architecture",
  },
  playbooks: {
    directory: "playbooks",
    basePath: "/playbooks",
    label: "Playbooks",
  },
  research: {
    directory: "research",
    basePath: "/research",
    label: "Research",
  },
  projects: {
    directory: "projects",
    basePath: "/projects",
    label: "Projects",
  },
  talks: {
    directory: "talks",
    basePath: "/talks",
    label: "Talks",
  },
} as const;

export const contentCategories = [
  "Enterprise AI",
  "Agentic AI",
  "Computer Vision",
  "Architecture",
  "Leadership",
] as const;

export type ContentType = keyof typeof contentTypes;
export type ContentCategory = (typeof contentCategories)[number];

export type ContentHeading = {
  id: string;
  text: string;
  level: number;
};

export type ContentEntry = {
  type: ContentType;
  title: string;
  slug: string;
  description: string;
  published: string;
  updated?: string;
  author: string;
  category: ContentCategory;
  tags: string[];
  featured: boolean;
  cover?: string;
  readingTime: number;
  difficulty?: "Beginner" | "Intermediate" | "Advanced";
  series?: string;
  seoTitle?: string;
  seoDescription?: string;
  canonical?: string;
  url: string;
  body: string;
  headings: ContentHeading[];
};

const contentRoot = path.join(process.cwd(), "content");

function toArray(value: unknown): string[] {
  if (Array.isArray(value)) {
    return value.map(String);
  }

  if (typeof value === "string" && value.length > 0) {
    return value.split(",").map((item) => item.trim());
  }

  return [];
}

function toDateString(value: unknown): string {
  if (value instanceof Date) {
    return value.toISOString().slice(0, 10);
  }

  if (typeof value === "string") {
    return value;
  }

  return new Date().toISOString().slice(0, 10);
}

function toSlug(value: string): string {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function isContentCategory(value: unknown): value is ContentCategory {
  return contentCategories.includes(value as ContentCategory);
}

function getHeadingId(text: string): string {
  return toSlug(text.replace(/[`*_]/g, ""));
}

function getHeadings(body: string): ContentHeading[] {
  return body
    .split("\n")
    .map((line) => {
      const match = /^(#{2,3})\s+(.+)$/.exec(line.trim());

      if (!match) {
        return null;
      }

      return {
        id: getHeadingId(match[2]),
        text: match[2].trim(),
        level: match[1].length,
      };
    })
    .filter((heading): heading is ContentHeading => heading !== null);
}

function getFilesForType(type: ContentType): string[] {
  const directory = path.join(contentRoot, contentTypes[type].directory);

  if (!fs.existsSync(directory)) {
    return [];
  }

  return fs
    .readdirSync(directory)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => path.join(directory, file));
}

function readContentFile(type: ContentType, filePath: string): ContentEntry {
  const raw = fs.readFileSync(filePath, "utf8");
  const { content, data } = matter(raw);
  const fileSlug = path.basename(filePath, ".mdx");
  const title = String(data.title ?? fileSlug);
  const slug = String(data.slug ?? fileSlug);
  const category = isContentCategory(data.category)
    ? data.category
    : "Enterprise AI";
  const stats = readingTime(content);
  const url = `${contentTypes[type].basePath}/${slug}`;

  return {
    type,
    title,
    slug,
    description: String(data.description ?? ""),
    published: toDateString(data.published ?? data.date),
    updated: data.updated ? toDateString(data.updated) : undefined,
    author: String(data.author ?? siteConfig.name),
    category,
    tags: toArray(data.tags),
    featured: Boolean(data.featured),
    cover: data.cover ? String(data.cover) : undefined,
    readingTime: Number(
      data.readingTime ?? Math.max(1, Math.ceil(stats.minutes)),
    ),
    difficulty: data.difficulty
      ? (String(data.difficulty) as ContentEntry["difficulty"])
      : undefined,
    series: data.series ? String(data.series) : undefined,
    seoTitle: data.seoTitle ? String(data.seoTitle) : undefined,
    seoDescription: data.seoDescription
      ? String(data.seoDescription)
      : undefined,
    canonical: data.canonical ? String(data.canonical) : undefined,
    url,
    body: content,
    headings: getHeadings(content),
  };
}

export function getContentByType(type: ContentType): ContentEntry[] {
  return getFilesForType(type)
    .map((filePath) => readContentFile(type, filePath))
    .sort((a, b) => Date.parse(b.published) - Date.parse(a.published));
}

export function getAllContent(): ContentEntry[] {
  return (Object.keys(contentTypes) as ContentType[])
    .flatMap((type) => getContentByType(type))
    .sort((a, b) => Date.parse(b.published) - Date.parse(a.published));
}

export function getFeaturedContent(limit = 6): ContentEntry[] {
  return getAllContent()
    .filter((entry) => entry.featured)
    .slice(0, limit);
}

export function getContentEntry(
  type: ContentType,
  slug: string,
): ContentEntry | undefined {
  return getContentByType(type).find((entry) => entry.slug === slug);
}

export function getRelatedContent(
  entry: ContentEntry,
  limit = 3,
): ContentEntry[] {
  const tagSet = new Set(entry.tags);

  return getAllContent()
    .filter((candidate) => candidate.url !== entry.url)
    .map((candidate) => ({
      candidate,
      score:
        (candidate.type === entry.type ? 2 : 0) +
        candidate.tags.filter((tag) => tagSet.has(tag)).length +
        (candidate.category === entry.category ? 1 : 0),
    }))
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(({ candidate }) => candidate);
}

export function getSearchIndex() {
  return getAllContent().map((entry) => ({
    title: entry.title,
    description: entry.description,
    url: entry.url,
    type: contentTypes[entry.type].label,
    category: entry.category,
    tags: entry.tags,
    published: entry.published,
    body: entry.body
      .replace(/<[^>]+>/g, " ")
      .replace(/[#*_`>-]/g, " ")
      .replace(/\s+/g, " ")
      .trim()
      .slice(0, 1200),
  }));
}
