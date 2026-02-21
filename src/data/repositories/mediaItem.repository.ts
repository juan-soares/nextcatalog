import { MediaItem } from "@/src/types";
import { readDatabase } from "../db";

async function getAllMediaItems(): Promise<MediaItem[]> {
  const db = await readDatabase();

  return db.mediaItems || [];
}

async function getMediaItemByCategoryId(
  categoryIdToFind: string,
): Promise<MediaItem[]> {
  const mediaItems = await getAllMediaItems();

  const mediaItemsFiltered = mediaItems.filter(
    ({ categoryId }) => categoryId === categoryIdToFind,
  );

  return mediaItemsFiltered;
}

export const mediaItemRepository = {
  getAllMediaItems,
  getMediaItemByCategoryId,
};
