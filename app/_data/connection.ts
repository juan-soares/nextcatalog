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

export function getCollection<C extends keyof IDatabase>(collectionTitle: C) {
  const find = async ({
    query,
    limit,
    sortBy,
  }: IFindOptions<C>): Promise<C[]> => {
    try {
      const db: IDatabase = await readDB();
      let collectionDocs: IDatabase[C] = db[collectionTitle] || [];

      if (Object.keys(query).length > 0) {
      }

      if (limit) {
        collectionDocs = collectionDocs.slice(0, limit);
      }

      return collectionDocs;
    } catch (error) {
      console.error("Erro ao consultar collection." + error);
      return [];
    }
  };

  return { find };
}
