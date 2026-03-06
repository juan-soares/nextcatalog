import fs from "fs/promises";
import path from "path";
import { Database, MongoDoc } from "@/database/types";

const DB_PATH = path.join(process.cwd(), "src/database/db.json");

async function connect(): Promise<Database> {
  if (!DB_PATH) throw new Error("Caminho incorreto do banco de dados.");
  console.log(DB_PATH);
  const fileContent = await fs.readFile(DB_PATH, "utf-8");
  return JSON.parse(JSON.stringify(JSON.parse(fileContent))) as Database;
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
  );

  await fs.writeFile(DB_PATH, JSON.stringify(dbToWrite, null, 2));
}

export const database = { connect, write };
