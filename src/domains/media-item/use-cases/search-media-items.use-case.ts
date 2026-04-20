import { MediaItemFindOptions } from "../domain";
import { mediaItemRepository } from "../infra";

export async function searchMediaItemsUseCase(options: MediaItemFindOptions) {
  const normalizedQuery = options.query?.trim();
  const MAX_LIMIT = 20;

  return await mediaItemRepository.search({
    ...options,
    query: normalizedQuery,
    limit: Math.min(options.limit ?? 5, MAX_LIMIT),
    sort: options.sort ?? {
      by: "alph",
      direction: "asc",
    },
  });
}
