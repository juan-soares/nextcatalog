import { HydratedDocument } from "mongoose";

export interface MediaType {
  label: string;
  slug: string;
}

export type MediaTypeDocument = HydratedDocument<MediaType>;

export interface MediaTypeDTO {
  id: string;
  label: string;
  slug: string;
}

export interface MediaTypeServiceFilters {
  label: string;
}

export type MediaTypeServiceSort = "label" | "createdAt" | "updatedAt";

export interface MediaTypeFindOptions {
  filters?: Partial<MediaTypeServiceFilters>;
  sort?: Partial<Record<MediaTypeServiceSort, "asc" | "desc">>;
  limit?: number;
}
