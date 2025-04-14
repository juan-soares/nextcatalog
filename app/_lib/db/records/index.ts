import { IDatabase, IRecord } from "../../interfaces";
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
