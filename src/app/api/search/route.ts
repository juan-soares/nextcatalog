import { mediaItemRepository } from "@/database/repositories";
import { mediaItemsToSearchResults } from "@/features/globalSearch/mapper";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get("q") || "";

  if (!query.trim()) {
    return Response.json([]);
  }

  const items = await mediaItemRepository.findAll({
    filter: query,
    sortBy: "title",
    order: "asc",
    limit: 5,
  });

  const results = mediaItemsToSearchResults(items);

  return Response.json(results);
}
