import { HydratedDocument } from "mongoose";

export interface Genre {
  label: string;
}

export type GenreDocument = HydratedDocument<Genre>;

export interface GenreDTO {
  id: string;
  label: string;
}

export interface GenreServiceFilters {
  label: string;
}

export type GenreServiceSort = "label" | "createdAt" | "updatedAt";

export interface GenreFindOptions {
  filters?: Partial<GenreServiceFilters>;
  sort?: Partial<Record<GenreServiceSort, "asc" | "desc">>;
  limit?: number;
}
