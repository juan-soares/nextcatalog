import fs from "fs/promises";
import path from "path";
import { Database, MongoDoc } from "@/database/types";

const DB_PATH = path.join(process.cwd(), "src/database/db.json");

let cachedDb: Database | null = null;

async function connect(): Promise<Database> {
  if (cachedDb) return cachedDb;

  if (!DB_PATH) throw new Error("Caminho incorreto do banco de dados.");

  const fileContent = await fs.readFile(DB_PATH, "utf-8");
  const db: Database = JSON.parse(fileContent);
  cachedDb = db;

  return cachedDb;
}

async function write(db: Database): Promise<void> {
  const now = new Date().toISOString();

  const dbToWrite = Object.fromEntries(
    Object.entries(db).map(([collectionName, items]) => {
      const updatedItems = items.map((item: MongoDoc) => ({
        ...item,
        createdAt: (item as any).createdAt || now,
        updatedAt: now,
      }));

      return [collectionName, updatedItems];
    }),
  ) as Database;

  await fs.writeFile(DB_PATH, JSON.stringify(dbToWrite, null, 2));
  cachedDb = dbToWrite;
}

export const database = { connect, write };
