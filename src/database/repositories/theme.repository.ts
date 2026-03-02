import { v4 as uuid } from "uuid";
import { database } from "../database";
import { FindOptions, ThemeDoc } from "../types";
import { applyFilter, applySort, applyLimit } from "../utils";

async function findAll(options?: FindOptions<ThemeDoc>): Promise<ThemeDoc[]> {
  const db = await database.connect();
  let items = db.themes;

  if (options?.filter) items = applyFilter(items, options.filter);
  if (options?.sortBy) items = applySort(items, options.sortBy, options.order);
  if (options?.limit) items = applyLimit(items, options.limit);

  return items;
}

async function findById(
  _idToSearch: ThemeDoc["_id"],
): Promise<ThemeDoc | null> {
  const db = await database.connect();
  const item = db.themes.find(({ _id }) => _id === _idToSearch);
  return item || null;
}

async function create(
  theme: Omit<ThemeDoc, "_id" | "createdAt" | "updatedAt">,
): Promise<ThemeDoc> {
  const db = await database.connect();
  const newId = uuid();

  const now = new Date();
  const newItem: ThemeDoc = {
    _id: newId,
    ...theme,
    createdAt: now,
    updatedAt: now,
  };

  db.themes.push(newItem);
  await database.write(db);

  return newItem;
}

async function update(
  _idToSearch: ThemeDoc["_id"],
  newValues: Omit<ThemeDoc, "updatedAt">,
): Promise<ThemeDoc | null> {
  const db = await database.connect();

  const index = db.themes.findIndex(({ _id }) => _id === _idToSearch);
  if (index === -1) return null;

  const now = new Date();
  const updatedItem: ThemeDoc = {
    ...db.themes[index],
    ...newValues,
    updatedAt: now,
  };

  db.themes[index] = updatedItem;
  await database.write(db);

  return updatedItem;
}

async function remove(_idToSearch: ThemeDoc["_id"]): Promise<ThemeDoc | null> {
  const db = await database.connect();

  const index = db.themes.findIndex(({ _id }) => _id === _idToSearch);
  if (index === -1) return null;

  const removedItem = db.themes.splice(index, 1)[0];
  await database.write(db);

  return removedItem;
}

export const themeRepository = { findAll, findById, create, update, remove };
