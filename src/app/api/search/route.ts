import { mediaItemService } from "@/domains/media-item";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get("q") || "";

  if (!query.trim()) {
    return Response.json([]);
  }

  const mediaItems = await mediaItemService.searchByText(query);

  return Response.json(mediaItems);
}
