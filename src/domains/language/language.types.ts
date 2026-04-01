import { HydratedDocument } from "mongoose";

export interface Language {
  label: string;
}

export type LanguageDocument = HydratedDocument<Language>;

export interface LanguageDTO {
  id: string;
  label: string;
}

export interface LanguageServiceFilters {
  label: string;
}

export type LanguageServiceSort = "label" | "createdAt" | "updatedAt";

export interface LanguageFindOptions {
  filters?: Partial<LanguageServiceFilters>;
  sort?: Partial<Record<LanguageServiceSort, "asc" | "desc">>;
  limit?: number;
}
