import { HydratedDocument } from "mongoose";

export interface Attribute {
  label: string;
  key: string;
  slug: string;
}

export type AttributeDocument = HydratedDocument<Attribute>;

export interface AttributeDTO {
  id: string;
  label: string;
  key: string;
  slug: string;
  fields: [label: string, key: string];
}

export interface AttributeServiceFilters {
  label: string;
  slug: string;
}

export type AttributeServiceSort = "label" | "createdAt" | "updatedAt";

export interface AttributeFindOptions {
  filters?: Partial<AttributeServiceFilters>;
  sort?: Partial<Record<AttributeServiceSort, "asc" | "desc">>;
  limit?: number;
}
