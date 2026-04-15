// =========================
// TYPES AUX
// =========================

import { MediaType } from "../entity";
import { toDomain } from "../mappers";
import { MediaTypeModel } from "./media-type.model";

type CreateMediaTypeInput = Omit<MediaType, "id" | "createdAt" | "updatedAt">;

type UpdateMediaTypeInput = Partial<
  Omit<MediaType, "id" | "createdAt" | "updatedAt">
>;

// =========================
// REPOSITORY
// =========================

export const MediaTypeRepository = {
  // -------------------------
  // CREATE
  // -------------------------
  async create(data: CreateMediaTypeInput): Promise<MediaType> {
    const created = await MediaTypeModel.create(data);
    return toDomain(created);
  },

  // -------------------------
  // FIND BY ID
  // -------------------------
  async findById(id: string): Promise<MediaType | null> {
    const doc = await MediaTypeModel.findById(id);
    if (!doc) return null;

    return toDomain(doc);
  },

  // -------------------------
  // FIND BY SLUG
  // -------------------------
  async findBySlug(slug: string): Promise<MediaType | null> {
    const doc = await MediaTypeModel.findOne({ slug });
    if (!doc) return null;

    return toDomain(doc);
  },

  // -------------------------
  // LIST
  // -------------------------
  async list(): Promise<MediaType[]> {
    const docs = await MediaTypeModel.find().sort({ createdAt: -1 });
    return docs.map(toDomain);
  },

  // -------------------------
  // UPDATE
  // -------------------------
  async update(
    id: string,
    data: UpdateMediaTypeInput,
  ): Promise<MediaType | null> {
    const updated = await MediaTypeModel.findByIdAndUpdate(id, data, {
      new: true,
    });

    if (!updated) return null;

    return toDomain(updated);
  },

  // -------------------------
  // SOFT DELETE (deactivate)
  // -------------------------
  async deactivate(id: string): Promise<MediaType | null> {
    const updated = await MediaTypeModel.findByIdAndUpdate(
      id,
      { isActive: false },
      { new: true },
    );

    if (!updated) return null;

    return toDomain(updated);
  },
};
