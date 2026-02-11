import "server-only";
import fs from "fs/promises";
import path from "path";

const dbPath = path.join(process.cwd(), "src/data/database.json");
let cachedData: any = null;

export async function readDatabase(): Promise<any> {
  if (cachedData) return cachedData;

  const fileData = await fs.readFile(dbPath, "utf-8");
  cachedData = JSON.parse(fileData);
  return cachedData;
}

export async function writeDatabase(data: unknown) {
  await fs.writeFile(dbPath, JSON.stringify(data, null, 2), "utf-8");
  cachedData = data;
}
