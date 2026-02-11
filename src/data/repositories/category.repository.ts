import { Category } from "@/src/types";
import { readDatabase, writeDatabase } from "../db";

async function getAllCategories(): Promise<Category[]> {
  const db = await readDatabase();
  return db.categories || [];
}

async function getCategoryById(id: string): Promise<Category | undefined> {
  const db = await readDatabase();
  return db.categories.find((c: Category) => c._id === id);
}

async function addCategory(category: Category): Promise<Category> {
  const db = await readDatabase();
  db.categories.push(category);
  await writeDatabase(db); // <-- await garantido
  return category;
}

async function updateCategory(
  id: string,
  updatedFields: Partial<Category>,
): Promise<Category | null> {
  const db = await readDatabase();
  const category = db.categories.find((c: Category) => c._id === id);
  if (!category) return null;

  Object.assign(category, updatedFields);
  category.lastUpdateAt = new Date().toISOString();

  await writeDatabase(db); // <-- await garantido
  return category;
}

async function removeCategory(id: string): Promise<boolean> {
  const db = await readDatabase();
  const initialLength = db.categories.length;
  db.categories = db.categories.filter((c: Category) => c._id !== id);
  await writeDatabase(db); // <-- await garantido
  return db.categories.length < initialLength;
}

export const categoryRepository = {
  getAllCategories,
  getCategoryById,
  addCategory,
  updateCategory,
  removeCategory,
};
