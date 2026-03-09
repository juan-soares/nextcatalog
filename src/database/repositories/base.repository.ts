import { v4 as uuid } from "uuid";
import { database } from "../database";
import { MongoDoc, Database, FindOptions } from "../types";
import { applyFilter, applyLimit, applyPopulate, applySort } from "../utils";

export const createRepository = <T extends MongoDoc>(
  collectionName: keyof Database,
) => {
  async function findAll(options?: FindOptions<T>): Promise<T[]> {
    const db = await database.connect();
    const items = (db[collectionName] as unknown as T[]) ?? [];

    let result = [...items];

    if (options?.filter) result = applyFilter(result, options.filter);
    if (options?.sortBy)
      result = applySort(result, options.sortBy, options.order);
    if (options?.limit) result = applyLimit(result, options.limit);

    return result;
  }

  async function findById(_id: string): Promise<T | null> {
    const db = await database.connect();
    const items = (db[collectionName] as unknown as T[]) ?? [];
    return items.find((item) => item._id === _id) ?? null;
  }

  async function create(
    data: Omit<T, "_id" | "createdAt" | "updatedAt">,
  ): Promise<T> {
    const db = await database.connect();
    const newItem: T = {
      _id: uuid(),
      ...data,
      createdAt: new Date(),
      updatedAt: new Date(),
    } as T;

    (db[collectionName] as unknown as T[]).push(newItem);
    await database.write(db);

    return newItem;
  }

  async function update(_id: string, newValues: Partial<T>): Promise<T | null> {
    const db = await database.connect();
    const items = (db[collectionName] as unknown as T[]) ?? [];
    const index = items.findIndex((item) => item._id === _id);

    if (index === -1) return null;

    const updatedItem = {
      ...items[index],
      ...newValues,
      updatedAt: new Date(),
    } as T;

    items[index] = updatedItem;
    await database.write(db);

    return updatedItem;
  }

  async function remove(_id: string): Promise<T | null> {
    const db = await database.connect();
    const items = (db[collectionName] as unknown as T[]) ?? [];
    const index = items.findIndex((item) => item._id === _id);

    if (index === -1) return null;

    const removedItem = items.splice(index, 1)[0];
    await database.write(db);

    return removedItem;
  }

  return { findAll, findById, create, update, remove };
};
