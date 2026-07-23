import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";
import { type ContentEntry, contentTypes } from "@/lib/content";

const defaultImage = {
  url: "/og.png",
  width: 1200,
  height: 630,
  alt: "Harshit Bhatia - CTO at Assert AI specializing in Enterprise Agentic AI Systems.",
};

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  tags?: string[];
};

export function getPageMetadata({
  title,
  description,
  path,
  image,
  type = "website",
  publishedTime,
  modifiedTime,
  tags = [],
}: PageMetadataInput): Metadata {
  const imageConfig = image
    ? {
        url: image,
        width: 1200,
        height: 630,
        alt: `${title} - ${siteConfig.name}`,
      }
    : defaultImage;

  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url: path,
      siteName: siteConfig.name,
      locale: "en_US",
      type,
      images: [imageConfig],
      ...(type === "article"
        ? {
            publishedTime,
            modifiedTime,
            authors: [siteConfig.name],
            tags,
          }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageConfig.url],
    },
  };
}

export function getContentMetadata(entry: ContentEntry): Metadata {
  return getPageMetadata({
    title: entry.seoTitle ?? entry.title,
    description: entry.seoDescription ?? entry.description,
    path: entry.canonical ?? entry.url,
    image: entry.cover,
    type: "article",
    publishedTime: entry.published,
    modifiedTime: entry.updated ?? entry.published,
    tags: entry.tags,
  });
}

export function getBreadcrumbSchema(
  items: Array<{ name: string; url: string }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.url === "/" ? "" : item.url}`,
    })),
  };
}

export function getContentBreadcrumbSchema(entry: ContentEntry) {
  return getBreadcrumbSchema([
    { name: "Home", url: "/" },
    {
      name: contentTypes[entry.type].label,
      url: contentTypes[entry.type].basePath,
    },
    { name: entry.title, url: entry.url },
  ]);
}
