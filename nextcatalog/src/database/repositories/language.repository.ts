import { v4 as uuid } from "uuid";
import { database } from "../database";
import { FindOptions, LanguageDoc } from "../types";
import { applyFilter, applyLimit, applySort } from "../utils";

async function findAll(
  options?: FindOptions<LanguageDoc>,
): Promise<LanguageDoc[]> {
  const db = await database.connect();
  let items = db.languages;

  if (options?.filter) items = applyFilter(items, options.filter);
  if (options?.sortBy) items = applySort(items, options.sortBy, options.order);
  if (options?.limit) items = applyLimit(items, options.limit);

  return items;
}

async function findById(
  _idToSearch: LanguageDoc["_id"],
): Promise<LanguageDoc | null> {
  const db = await database.connect();
  const item = db.languages.find(({ _id }) => _id === _idToSearch);
  return item || null;
}

async function create(
  language: Omit<LanguageDoc, "_id" | "createdAt" | "updatedAt">,
): Promise<LanguageDoc> {
  const db = await database.connect();
  const newId = uuid();

  const now = new Date;
  const newItem: LanguageDoc = {
    _id: newId,
    ...language,
    createdAt: now,
    updatedAt: now,
  };

  db.languages.push(newItem);
  await database.write(db);

  return newItem;
}

export const languageRepository = { findAll, findById, create };
