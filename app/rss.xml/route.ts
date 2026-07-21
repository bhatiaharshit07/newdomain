import { getAllContent } from "@/lib/content";
import { siteConfig } from "@/lib/site";

function escapeXml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export function GET() {
  const items = getAllContent()
    .map(
      (entry) => `
        <item>
          <title>${escapeXml(entry.title)}</title>
          <link>${siteConfig.url}${entry.url}</link>
          <guid>${siteConfig.url}${entry.url}</guid>
          <description>${escapeXml(entry.description)}</description>
          <pubDate>${new Date(entry.published).toUTCString()}</pubDate>
          ${entry.category ? `<category>${escapeXml(entry.category)}</category>` : ""}
          ${entry.cover ? `<enclosure url="${siteConfig.url}${entry.cover}" type="image/png" />` : ""}
        </item>`,
    )
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8" ?>
    <rss version="2.0">
      <channel>
        <title>${escapeXml(siteConfig.title)}</title>
        <link>${siteConfig.url}</link>
        <description>${escapeXml(siteConfig.description)}</description>
        ${items}
      </channel>
    </rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
    },
  });
}
