import fs from "fs";
import path from "path";
import { CollectionName } from "../../types";

let cachedData: any = null;

function readDatabase(): any {
  if (cachedData) {
    return cachedData;
  }

  const filePath = path.join(process.cwd(), "src", "data", "database.json");
  const fileData = fs.readFileSync(filePath, "utf8");
  cachedData = JSON.parse(fileData);

  return cachedData;
}

export function getDocsByCollection<T>(collectionName: CollectionName): T[] {
  const db = readDatabase();
  return db[collectionName] || [];
}
