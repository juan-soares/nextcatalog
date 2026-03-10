import { database } from "../database";
import { Database, MongoDoc } from "../types";

function mapFieldToCollection(field: string, db: Database) {
  switch (field) {
    case "themeIds":
      return db.themes;
    case "franchiseIds":
      return db.franchises;
    case "languageIds":
      return db.languages;
    case "mediaTypeId":
      return db.mediaTypes;

    default:
      return null;
  }
}

export async function applyPopulate<T extends MongoDoc>(
  items: T[],
  collectionName: keyof Database,
  fields: Array<keyof T>,
): Promise<T[]> {
  const db = await database.connect();

  return Promise.all(
    items.map(async (item) => {
      const newItem = { ...item };

      for (const field of fields) {
        const value = item[field];
        if (!value) continue;

        // Descobre a collection correta para este campo
        const collection = mapFieldToCollection(field as string, db);
        if (!collection) continue;

        // Se for array de IDs
        if (Array.isArray(value)) {
          (newItem[field] as unknown) = value
            .map((id) => collection.find((doc: MongoDoc) => doc._id === id))
            .filter(Boolean); // remove undefined
        }
        // Se for ID único
        else if (typeof value === "string") {
          (newItem[field] as unknown) =
            collection.find((doc: MongoDoc) => doc._id === value) || null;
        }
      }

      return newItem;
    }),
  );
}
