import type { MetadataRoute } from "next";
import { getAllContent } from "@/lib/content";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes = [
    "/",
    "/insights",
    "/articles",
    "/architecture",
    "/playbooks",
    "/research",
    "/projects",
    "/products",
    "/talks",
  ];

  return [
    ...routes.map((route) => ({
      url: `${siteConfig.url}${route === "/" ? "" : route}`,
      lastModified: now,
      changeFrequency:
        route === "/" ? ("weekly" as const) : ("monthly" as const),
      priority: route === "/" ? 1 : 0.8,
    })),
    ...getAllContent().map((entry) => ({
      url: `${siteConfig.url}${entry.url}`,
      lastModified: new Date(entry.updated ?? entry.published),
      changeFrequency: "monthly" as const,
      priority: entry.featured ? 0.9 : 0.7,
    })),
  ];
}
