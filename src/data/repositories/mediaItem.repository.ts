import { MediaItemDoc } from "@/src/types";
import { readDatabase } from "../db";

async function getAllMediaItems(): Promise<MediaItemDoc[]> {
  const db = await readDatabase();

  return db.mediaItems || [];
}

async function getMediaItemByCategoryId(
  categoryIdToFind: string,
): Promise<MediaItemDoc[]> {
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
