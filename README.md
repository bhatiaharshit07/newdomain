# Harshit Bhatia Personal Website

A premium personal website for Harshit Bhatia, Chief Technology Officer, focused on enterprise AI, computer vision, multi-agent systems, and product engineering.

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

## Content

Primary content lives in `content/site.ts`. Reusable UI lives in `components/`, with smaller primitives in `components/ui/`.

Future surfaces such as MDX writing, newsletter, speaking, open source, AI assistant, RSS, and analytics dashboard can be added without changing the homepage structure.
