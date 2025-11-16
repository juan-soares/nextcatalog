import fs from "fs/promises";
import path from "path";
import { IDatabase, IFindOptions } from "./data.types";

const DB_PATH = path.join(process.cwd(), "app", "_data", "database.json");

async function readDB(): Promise<IDatabase> {
  try {
    const data = await fs.readFile(DB_PATH, "utf-8");
    return JSON.parse(data) as IDatabase;
  } catch (error) {
    console.error("Erro ao ler o banco JSON:", error);
    throw error;
  }
}

async function writeDB(data: IDatabase) {
  try {
    await fs.writeFile(DB_PATH, JSON.stringify(data, null, 2), "utf-8");
  } catch (error) {
    console.error("Erro ao salvar no banco JSON:", error);
    throw error;
  }
}

export async function getCollection<T>(collectionTitle: string) {
  const find = async ({
    query,
    limit,
    sortBy,
  }: IFindOptions<T>): Promise<T[]> => {
    try {
      const db = await readDB();
      const collectionRecords: T[] = db[collectionTitle] || [];
      
      return collectionRecords;
    } catch (error) {
      console.error(error);
      return [];
    }
  };

  return { find };
}
