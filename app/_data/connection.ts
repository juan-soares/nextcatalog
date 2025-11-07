import fs from "fs/promises";
import path from "path";
import { IDB, IRecord } from "./data.types";

const DB_PATH = path.join(process.cwd(), "app", "_data", "database.json");

async function readDB(): Promise<IDB> {
  try {
    const data = await fs.readFile(DB_PATH, "utf-8");
    return JSON.parse(data) as IDB;
  } catch (error) {
    console.error("Erro ao ler o banco JSON:", error);
    throw error;
  }
}

async function writeDB(data: IDB) {
  try {
    await fs.writeFile(DB_PATH, JSON.stringify(data, null, 2), "utf-8");
  } catch (error) {
    console.error("Erro ao salvar no banco JSON:", error);
    throw error;
  }
}

export async function getCollection<C extends keyof IDB>(
  collection: C,
  options?: { query?: string; limit?: number }
): Promise<IDB[C]> {
  const db: IDB = await readDB();
  let collectionData = db[collection] as any;

  if (options?.limit) {
    collectionData = collectionData.slice(0, options.limit);
  }

  return collectionData as IDB[C];
}

export async function getSearch(
  term: string,
  limit: number
): Promise<IRecord[]> {
  if (!term || term.trim().length < 2) return [];

  try {
    const categories = await getCollection("categories");
    const resultsPromise = categories.map(({ collection }) =>
      getCollection(collection, { query: term })
    );

    const results: IRecord[] = (await Promise.all(resultsPromise))
      .flat()
      .slice(0, limit);
    return results;
  } catch (error) {
    console.error("Erro ao buscar registros:", error);
    return [];
  }
}
