import fs from "fs/promises";
import path from "path";

const DB_PATH = path.join(process.cwd(), "app", "_data", "database.json");

export async function readDB<T>(): Promise<T> {
  try {
    const data = await fs.readFile(DB_PATH, "utf-8");
    return JSON.parse(data) as T;
  } catch (error) {
    console.error("Erro ao ler o banco JSON:", error);
    throw error;
  }
}
