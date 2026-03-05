import { v4 as uuid } from "uuid";
import { database } from "../database";
import { FindOptions, MediaTypeDoc } from "../types";
import { applyFilter, applyLimit, applySort } from "../utils";

async function findAll(
  options?: FindOptions<MediaTypeDoc>,
): Promise<MediaTypeDoc[]> {
  const db = await database.connect();
  let items = db.mediaTypes;

  if (options?.filter) items = applyFilter(items, options.filter);
  if (options?.sortBy) items = applySort(items, options.sortBy, options.order);
  if (options?.limit) items = applyLimit(items, options.limit);

  return items;
}

async function findById(
  _idToSearch: MediaTypeDoc["_id"],
): Promise<MediaTypeDoc | null> {
  const db = await database.connect();
  const item = db.mediaTypes.find(({ _id }) => _id === _idToSearch);
  return item || null;
}

async function create(
  mediaType: Omit<MediaTypeDoc, "_id" | "createdAt" | "updatedAt">,
): Promise<MediaTypeDoc> {
  const db = await database.connect();
  const newId = uuid();

  const now = new Date();
  const newItem: MediaTypeDoc = {
    _id: newId,
    ...mediaType,
    createdAt: now,
    updatedAt: now,
  };

  db.mediaTypes.push(newItem);
  await database.write(db);

  return newItem;
}

async function update(
  _idToSearch: MediaTypeDoc["_id"],
  newValues: Omit<MediaTypeDoc, "updatedAt">,
): Promise<MediaTypeDoc | null> {
  const db = await database.connect();

  const index = db.mediaTypes.findIndex(({ _id }) => _id === _idToSearch);
  if (index === -1) return null;

  const now = new Date();
  const updatedItem: MediaTypeDoc = {
    ...db.mediaTypes[index],
    ...newValues,
    updatedAt: now,
  };

  db.mediaTypes[index] = updatedItem;
  await database.write(db);

  return updatedItem;
}

async function remove(
  _idToSearch: MediaTypeDoc["_id"],
): Promise<MediaTypeDoc | null> {
  const db = await database.connect();

  const index = db.mediaTypes.findIndex(({ _id }) => _id === _idToSearch);
  if (index === -1) return null;

  const removedItem = db.mediaTypes.splice(index, 1)[0];
  await database.write(db);

  return removedItem;
}

export const mediaTypeRepository = {
  findAll,
  findById,
  create,
  update,
  remove,
};
