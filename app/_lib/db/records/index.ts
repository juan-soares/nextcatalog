import {
  ICategory,
  IDatabase,
  IRecentRecordByCategory,
  IRecord,
} from "../../interfaces";
import connectToDatabase from "../connection";

export async function getRecordsByCategoryCollection(
  collectionToSearch: string,
  limit: 15
): Promise<IRecord[]> {
  const db: IDatabase | null = await connectToDatabase();
  if (!db) throw new Error("Erro");

  const records = db[collectionToSearch];

  return records.slice(0, limit);
}

export async function getRecentRecordsByCategory(): Promise<
  IRecentRecordByCategory[]
> {
  const db: IDatabase | null = await connectToDatabase();
  if (!db) throw new Error("Erro");

  const categoriesCollection: ICategory[] = db["categories"];

  const recentRecordsByCategory: IRecentRecordByCategory[] =
    categoriesCollection.map(({ title, collection }) => ({
      categoryTitle: title,
      records: db[collection].reverse().slice(0, 15),
    }));

  return recentRecordsByCategory;
}
