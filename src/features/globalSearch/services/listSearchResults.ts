import { mediaItemRepository } from "@/database/repositories";
import { SearchResult } from "../types";
import { mediaItemsToSearchResults } from "../mapper";

export async function listSearchResults(
  query: string,
): Promise<SearchResult[]> {
  const foundMediaItems = await mediaItemRepository.findAll({
    filter: { title: query, translatedTitle: query },
    sortBy: "title",
    order: "asc",
    limit: 5,
    populate: "mediaTypeId",
  });

  return mediaItemsToSearchResults(foundMediaItems);
}
