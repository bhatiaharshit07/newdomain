import { siteConfig } from "@/lib/site";

export function GET() {
  const body = [
    "User-agent: *",
    "Allow: /",
    "Disallow: /drafts/",
    "Disallow: /draft/",
    "Content-Signal: ai-train=no, search=yes, ai-input=yes",
    `Sitemap: ${siteConfig.url}/sitemap.xml`,
    "",
  ].join("\n");

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
