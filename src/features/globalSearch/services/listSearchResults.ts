import { mediaItemRepository } from "@/database/repositories";
import { SearchResult } from "../types";
import { mediaItemsToSearchResults } from "../mapper";

export async function listSearchResults(
  query: string,
): Promise<SearchResult[]> {
  const foundMediaItems = await mediaItemRepository.findAll({
    filter: query,
    sortBy: "title",
    order: "asc",
    limit: 5,
  });

  return mediaItemsToSearchResults(foundMediaItems);
}
