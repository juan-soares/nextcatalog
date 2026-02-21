import { MediaItemDoc, SortOptions } from "@/src/types";
import { mediaItemRepository } from "@/src/data/repositories";
import { sort } from "../utils";

export async function listMediaItemsGroupedByCategoryId(
  sortOptions: SortOptions,
  limitPerCategory: number = 5,
): Promise<Record<string, MediaItemDoc[]>> {
  const allMediaItems = await mediaItemRepository.getAllMediaItems();

  const { sortBy = "lastUpdateAt", sortDirection = "desc" } = sortOptions;

  const sortedMediaItems = sort(allMediaItems, sortBy, sortDirection);

  const grouped: Record<string, MediaItemDoc[]> = {};

  for (const item of sortedMediaItems) {
    if (!grouped[item.categoryId]) {
      grouped[item.categoryId] = [];
    }

    if (grouped[item.categoryId].length < limitPerCategory) {
      grouped[item.categoryId].push(item);
    }
  }

  return grouped;
}
