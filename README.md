# Harshit Bhatia Personal Website

A premium personal website for Harshit Bhatia, Chief Technology Officer at Assert AI, focused on enterprise AI, computer vision, multi-agent systems, and product engineering.

## Stack

- Next.js 15 with the App Router
- TypeScript
- Tailwind CSS v4
- Framer Motion
- Lucide React
- System font stack

## Setup

```bash
pnpm install
pnpm dev
```

## Production

```bash
pnpm build
pnpm start
```

Set `NEXT_PUBLIC_SITE_URL` to the production URL before deployment so sitemap and social metadata resolve to the final domain.
For this site, use `https://harshitbhatia.in` as the canonical production URL and configure `https://www.harshitbhatia.in` as the alternate Vercel domain.

## Search indexing

Set `GOOGLE_SITE_VERIFICATION` to the HTML verification token supplied by Google Search Console. You can optionally set `BING_SITE_VERIFICATION` for Bing Webmaster Tools. After deployment:

1. Verify the domain property in Google Search Console.
2. Submit `https://harshitbhatia.in/sitemap.xml`.
3. Inspect and request indexing for the homepage, `/about`, and the strongest architecture articles.
4. Confirm that the sitemap status is successful and that Google selected the intended canonical URLs.

Update the static route date in `app/sitemap.ts` only after a significant site-wide content, structured-data, or navigation change.

## Content

Primary content lives in `content/site.ts`. Reusable UI lives in `components/`, with smaller primitives in `components/ui/`.

Future surfaces such as MDX writing, newsletter, speaking, open source, AI assistant, RSS, and analytics dashboard can be added without changing the homepage structure.
