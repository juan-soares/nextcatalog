import { MediaItem } from "@/src/types";
import { readDatabase } from "../db";

async function getAllMediaItems(): Promise<MediaItem[]> {
  const db = await readDatabase();
  return db.mediaItem || [];
}

export const mediaItemRepository = {
  getAllMediaItems,
};
