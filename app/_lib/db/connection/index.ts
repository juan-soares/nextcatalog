import { IDatabase } from "../../interfaces";
import fs from "fs";

export default async function connectToDatabase(): Promise<IDatabase | null> {
  try {
    const filePath = "./app/_lib/db/db.json";
    const db: IDatabase = JSON.parse(fs.readFileSync(filePath, "utf-8"));

    if (!db) throw new Error("Banco de dados indisponível.");

    return db;
  } catch (error) {
    return null;
  }
}
