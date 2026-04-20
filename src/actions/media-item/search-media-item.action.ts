"use server";

import { MediaItem, searchMediaItemsUseCase } from "@/domains/media-item";

export async function searchMediaItemsAction(
  query: string,
): Promise<MediaItem[]> {
  if (!query || query.trim().length < 2) {
    return [];
  }

  try {
    return await searchMediaItemsUseCase({
      query,
      sort: {
        by: "alph",
        direction: "asc",
      },
      limit: 5,
    });
  } catch (error) {
    console.error("Houve um erro em searchMediaItemUseCase" + error);
    return [];
  }
}
