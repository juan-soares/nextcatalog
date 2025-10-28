import { promises as fs } from "fs";
import path from "path";

const DB_PATH = path.join(
  process.cwd(),
  "app",
  "_lib",
  "database",
  "database.json"
);

type Database = Record<string, any>;

export async function readDatabase(): Promise<Database> {
  try {
    const data = await fs.readFile(DB_PATH, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    console.error("Erro ao ler o database.json:", error);
    return {};
  }
}

export async function writeDatabase(data: Database): Promise<void> {
  try {
    await fs.writeFile(DB_PATH, JSON.stringify(data, null, 2), "utf-8");
  } catch (error) {
    console.error("Erro ao escrever no database.json:", error);
  }
}

export async function getCollection<T = any>(
  collectionName: string
): Promise<T[]> {
  const db = await readDatabase();
  return db[collectionName] || [];
}

export async function addItem<T = any>(
  collectionName: string,
  item: T
): Promise<void> {
  const db = await readDatabase();
  if (!db[collectionName]) db[collectionName] = [];
  db[collectionName].push(item);
  await writeDatabase(db);
}

export async function updateItem<T = any>(
  collectionName: string,
  id: string,
  updatedData: Partial<T>
): Promise<void> {
  const db = await readDatabase();
  const collection = db[collectionName] || [];

  const index = collection.findIndex((item: any) => item.id === id);
  if (index === -1) throw new Error(`Item com ID "${id}" não encontrado.`);

  collection[index] = { ...collection[index], ...updatedData };
  db[collectionName] = collection;
  await writeDatabase(db);
}

export async function deleteItem(
  collectionName: string,
  id: string
): Promise<void> {
  const db = await readDatabase();
  const collection = db[collectionName] || [];

  db[collectionName] = collection.filter((item: any) => item.id !== id);
  await writeDatabase(db);
}
