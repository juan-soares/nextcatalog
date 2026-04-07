import { HydratedDocument } from "mongoose";

export interface Mode {
  label: string;
}

export type ModeDocument = HydratedDocument<Mode>;

export interface ModeDTO {
  id: string;
  label: string;
}

export interface ModeServiceFilters {
  label: string;
}

export type ModeServiceSort = "label" | "createdAt" | "updatedAt";

export interface ModeFindOptions {
  filters?: Partial<ModeServiceFilters>;
  sort?: Partial<Record<ModeServiceSort, "asc" | "desc">>;
  limit?: number;
}
