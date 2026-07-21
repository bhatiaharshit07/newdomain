import { getSearchIndex } from "@/lib/content";

export function GET() {
  return Response.json(getSearchIndex(), {
    headers: {
      "Cache-Control": "public, max-age=0, s-maxage=3600",
    },
  });
}
