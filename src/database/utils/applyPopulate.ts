import { database } from "../database";
import { Database, MediaItemDoc, MongoDoc } from "../types";

export async function applyPopulate<T extends Database[keyof Database][number]>(
  items: T[],
  collectionName: keyof Database,
): Promise<T[]> {
  const db = await database.connect();

  const mediaTypes = db["mediaTypes"];

  if (collectionName === "mediaItems") {
    console.log(items);
    return items.map((item) => {
      const mediaItem = item as MediaItemDoc;

      const mediaTypeId = mediaTypes.find(
        ({ _id }) => _id === mediaItem.mediaTypeId,
      );

      return { ...item, mediaTypeId };
    });
  }

  return items;
}
