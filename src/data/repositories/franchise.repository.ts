import { Franchise } from "@/src/types";
import { readDatabase, writeDatabase } from "../db";

async function getAllFranchises(): Promise<Franchise[]> {
  const db = await readDatabase();
  return db.franchises || [];
}

async function getFranchiseById(id: string): Promise<Franchise | undefined> {
  const db = await readDatabase();
  return db.franchises.find((f: Franchise) => f._id === id);
}

async function addFranchise(franchise: Franchise): Promise<Franchise> {
  const db = await readDatabase();
  db.franchises.push(franchise);
  await writeDatabase(db); // <-- await garantido
  return franchise;
}

async function updateFranchise(
  id: string,
  updatedFields: Partial<Franchise>,
): Promise<Franchise | null> {
  const db = await readDatabase();
  const franchise = db.franchises.find((f: Franchise) => f._id === id);
  if (!franchise) return null;

  Object.assign(franchise, updatedFields);
  franchise.lastUpdateAt = new Date().toISOString();

  await writeDatabase(db); // <-- await garantido
  return franchise;
}

async function removeFranchise(id: string): Promise<boolean> {
  const db = await readDatabase();
  const initialLength = db.franchises.length;
  db.franchises = db.franchises.filter((f: Franchise) => f._id !== id);
  await writeDatabase(db); // <-- await garantido
  return db.franchises.length < initialLength;
}

export const franchiseRepository = {
  getAllFranchises,
  getFranchiseById,
  addFranchise,
  updateFranchise,
  removeFranchise,
};
