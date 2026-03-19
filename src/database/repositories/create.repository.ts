import { Model, Document } from "mongoose";
import { FindOptions } from "../types";
import { connectMongo } from "../mongodb/connection";

export async function createRepository<T extends Document>(model: Model<T>) {
  await connectMongo();

  async function findAll(options?: FindOptions<T>): Promise<T[]> {
    let query = model.find();

    if (options?.sort) query = query.sort(options.sort);
    if (options?.limit) query = query.limit(options.limit);
    if (options?.populate) {
      options.populate.forEach((field) => {
        query = query.populate(field as string);
      });
    }
    return await query;
  }

  async function findById(
    id: string,
    populate?: (keyof T)[],
  ): Promise<T | null> {
    let query = model.findById(id);
    if (populate) {
      populate.forEach((field) => {
        query = query.populate(field as string);
      });
    }
    return await query;
  }

  async function create(data: Partial<T>): Promise<T> {
    const doc = new model(data);
    return await doc.save();
  }

  async function update(id: string, data: Partial<T>): Promise<T | null> {
    return await model.findByIdAndUpdate(id, data, { new: true });
  }

  async function remove(id: string): Promise<T | null> {
    return await model.findByIdAndDelete(id);
  }

  return { findAll, findById, create, update, remove };
}
