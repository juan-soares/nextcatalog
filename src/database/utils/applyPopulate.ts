import { database } from "../database";
import { Database, MongoDoc } from "../types";

export async function applyPopulate<T extends MongoDoc>(
  items: T[],
  _collectionName: keyof Database,
): Promise<T[]> {
  const db = await database.connect();

  return items.map((item: any) => {
    const populatedItem = { ...item };

    for (const key in item) {
      const value = item[key];

      // RELAÇÃO 1:N (themeIds, franchiseIds, etc)
      if (key.endsWith("Ids") && Array.isArray(value)) {
        const collectionKey = key.replace("Ids", "s") as keyof Database;
        const collection = db[collectionKey];

        if (!collection) continue;

        populatedItem[key] = value.map((id: any) => {
          if (typeof id !== "string") return id; // já populado

          return collection.find((doc) => doc._id === id) ?? id;
        });
      }

      // RELAÇÃO 1:1 (mediaTypeId, languageId, etc)
      else if (key.endsWith("Id") && typeof value === "string") {
        const collectionKey = (key.replace("Id", "s") + "") as keyof Database;

        const collection = db[collectionKey];

        if (!collection) continue;

        const populated = collection.find((doc) => doc._id === value);

        if (populated) {
          populatedItem[key] = populated;
        }
      }
    }

    return populatedItem;
  });
}
