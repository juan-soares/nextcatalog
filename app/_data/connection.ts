import fs from "fs/promises";
import { IDatabase } from "./data.types";

const DB_PATH = process.env.DATABASE_URL;

export async function readDB(): Promise<IDatabase> {
  if (!DB_PATH) {
    throw new Error("Caminho definido em .env incorreto.");
  }
  try {
    const data = await fs.readFile(DB_PATH, "utf-8");
    const databaseParsed: IDatabase = JSON.parse(data);

    return databaseParsed;
  } catch (error) {
    console.error("Erro ao ler o banco JSON:", error);
    throw error;
  }
}

export async function writeDB(data: IDatabase) {
  if (!DB_PATH) {
    throw new Error("Caminho definido em .env incorreto.");
  }
  try {
    await fs.writeFile(DB_PATH, JSON.stringify(data, null, 2), "utf-8");
  } catch (error) {
    console.error("Erro ao salvar no banco JSON:", error);
    throw error;
  }
}
