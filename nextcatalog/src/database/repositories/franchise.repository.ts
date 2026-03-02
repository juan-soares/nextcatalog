import { v4 as uuid } from "uuid";
import { database } from "../database";
import { FranchiseDoc, FindOptions } from "../types";
import { applyFilter, applyLimit, applySort } from "../utils";

async function findAll(
  options?: FindOptions<FranchiseDoc>,
): Promise<FranchiseDoc[]> {
  const db = await database.connect();
  let items = [...db.franchises];

  if (options?.filter) items = applyFilter(items, options.filter);
  if (options?.sortBy) items = applySort(items, options.sortBy, options.order);
  if (options?.limit) items = applyLimit(items, options.limit);

  return items;
}

async function findById(
  _idToSearch: FranchiseDoc["_id"],
): Promise<FranchiseDoc | null> {
  const db = await database.connect();
  const item = db.franchises.find(({ _id }) => _id === _idToSearch);
  return item || null;
}

async function create(
  franchise: Omit<FranchiseDoc, "_id" | "createdAt" | "updatedAt">,
): Promise<FranchiseDoc> {
  const db = await database.connect();
  const newId = uuid();
  const now = new Date();

  const newItem: FranchiseDoc = {
    _id: newId,
    ...franchise,
    createdAt: now,
    updatedAt: now,
  };

  db.franchises.push(newItem);
  await database.write(db);

  return newItem;
}

async function update(
  _idToSearch: FranchiseDoc["_id"],
  newValues: Omit<FranchiseDoc, "updatedAt">,
): Promise<FranchiseDoc | null> {
  const db = await database.connect();

  const index = db.franchises.findIndex(({ _id }) => _id === _idToSearch);
  if (index === -1) return null;

  const now = new Date();
  const updatedItem: FranchiseDoc = {
    ...db.franchises[index],
    ...newValues,
    updatedAt: now,
  };

  db.franchises[index] = updatedItem;
  await database.write(db);

  return updatedItem;
}

async function remove(
  _idToSearch: FranchiseDoc["_id"],
): Promise<FranchiseDoc | null> {
  const db = await database.connect();

  const index = db.franchises.findIndex(({ _id }) => _id === _idToSearch);
  if (index === -1) return null;

  const removedItem = db.franchises.splice(index, 1)[0];
  await database.write(db);

  return removedItem;
}

export const franchiseRepository = {
  findAll,
  findById,
  create,
  update,
  remove,
};
