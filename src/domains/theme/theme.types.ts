import { HydratedDocument } from "mongoose";

export interface Theme {
  label: string;
}

export type ThemeDocument = HydratedDocument<Theme>;

export interface ThemeDTO {
  id: string;
  label: string;
}

export interface ThemeServiceFilters {
  label: string;
}

export type ThemeServiceSort = "label" | "createdAt" | "updatedAt";

export interface ThemeFindOptions {
  filters?: Partial<ThemeServiceFilters>;
  sort?: Partial<Record<ThemeServiceSort, "asc" | "desc">>;
  limit?: number;
}
