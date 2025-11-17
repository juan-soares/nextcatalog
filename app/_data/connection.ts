import fs from "fs/promises";
import path from "path";
import { IDatabase } from "./data.types";

const DB_PATH = path.join(process.cwd(), "app", "_data", "database.json");

export async function readDB(): Promise<IDatabase> {
  try {
    const data = await fs.readFile(DB_PATH, "utf-8");
    const databaseParsed: IDatabase = JSON.parse(data);

    return databaseParsed;
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
