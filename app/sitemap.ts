import type { MetadataRoute } from "next";
import { getAllContent } from "@/lib/content";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteLastModified = new Date("2026-07-23T00:00:00+05:30");
  const routes = [
    "/",
    "/about",
    "/insights",
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
      lastModified: siteLastModified,
    })),
    ...getAllContent().map((entry) => ({
      url: `${siteConfig.url}${entry.url}`,
      lastModified: new Date(entry.updated ?? entry.published),
    })),
  ];
}
