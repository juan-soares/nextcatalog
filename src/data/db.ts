import "server-only";
import fs from "fs/promises";
import path from "path";
import { Database } from "../types";

const dbPath = path.join(process.cwd(), "src/data/database.json");

let cachedData: Database | null = null;

export async function readDatabase(): Promise<Database> {
  if (cachedData) return cachedData;

  const fileData = await fs.readFile(dbPath, "utf-8");
  cachedData = JSON.parse(fileData) as Database;
  return cachedData;
}

export async function writeDatabase(data: Database) {
  await fs.writeFile(dbPath, JSON.stringify(data, null, 2), "utf-8");
  cachedData = data;
}
