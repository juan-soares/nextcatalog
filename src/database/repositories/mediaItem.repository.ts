import { v4 as uuid } from "uuid";
import { database } from "../database";
import { FindOptions, MediaItemDoc } from "../types";
import { applyFilter, applyLimit, applyPopulate, applySort } from "../utils";

async function findAll(
  options?: FindOptions<MediaItemDoc>,
): Promise<MediaItemDoc[]> {
  const db = await database.connect();
  let items = db.mediaItems ?? [];

  if (options?.filter) items = applyFilter(items, options.filter);
  if (options?.sortBy) items = applySort(items, options.sortBy, options.order);
  if (options?.limit) items = applyLimit(items, options.limit);
  if (items.length > 0) {
    items = await applyPopulate(items, "mediaItems");
  }

  console.log(items);

  return items;
}

async function findById(
  _idToSearch: MediaItemDoc["_id"],
): Promise<MediaItemDoc | null> {
  const db = await database.connect();
  const item = db.mediaItems.find(({ _id }) => _id === _idToSearch);
  return item || null;
}

async function create(
  mediaItem: Omit<MediaItemDoc, "_id" | "createdAt" | "updatedAt">,
): Promise<MediaItemDoc> {
  const db = await database.connect();
  const newId = uuid();

  const now = new Date();
  const newItem: MediaItemDoc = {
    _id: newId,
    ...mediaItem,
    createdAt: now,
    updatedAt: now,
  };

  db.mediaItems.push(newItem);
  await database.write(db);

  return newItem;
}

async function update(
  _idToSearch: MediaItemDoc["_id"],
  newValues: Omit<MediaItemDoc, "updatedAt">,
): Promise<MediaItemDoc | null> {
  const db = await database.connect();

  const index = db.mediaItems.findIndex(({ _id }) => _id === _idToSearch);
  if (index === -1) return null;

  const now = new Date();
  const updatedItem: MediaItemDoc = {
    ...db.mediaItems[index],
    ...newValues,
    updatedAt: now,
  };

  db.mediaItems[index] = updatedItem;
  await database.write(db);

  return updatedItem;
}

async function remove(
  _idToSearch: MediaItemDoc["_id"],
): Promise<MediaItemDoc | null> {
  const db = await database.connect();

  const index = db.mediaItems.findIndex(({ _id }) => _id === _idToSearch);
  if (index === -1) return null;

  const removedItem = db.mediaItems.splice(index, 1)[0];
  await database.write(db);

  return removedItem;
}

export const mediaItemRepository = {
  findAll,
  findById,
  create,
  update,
  remove,
};
