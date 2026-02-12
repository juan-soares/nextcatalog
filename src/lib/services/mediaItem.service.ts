import { MediaItem, SortOptions } from "@/src/types";
import { mediaItemRepository } from "@/src/data/repositories";
import { sort } from "../utils";

export async function listMediaItemsByCategoryId(
  categoryIdToSearch: string,
  sortOptions: SortOptions,
  limit: number = 1,
): Promise<MediaItem[]> {
  const allMediaItems = await mediaItemRepository.getAllMediaItems();

  const filteredMediaItems = allMediaItems.filter(
    ({ categoryId }) => categoryId === categoryIdToSearch,
  );

  return sort(
    filteredMediaItems,
    sortOptions.sortBy,
    sortOptions.sortDirection,
  ).slice(0, limit);
}
