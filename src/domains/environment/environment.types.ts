import { HydratedDocument } from "mongoose";

export interface Environment {
  label: string;
}

export type EnvironmentDocument = HydratedDocument<Environment>;

export interface EnvironmentDTO {
  id: string;
  label: string;
}

export interface EnvironmentServiceFilters {
  label: string;
}

export type EnvironmentServiceSort = "label" | "createdAt" | "updatedAt";

export interface EnvironmentFindOptions {
  filters?: Partial<EnvironmentServiceFilters>;
  sort?: Partial<Record<EnvironmentServiceSort, "asc" | "desc">>;
  limit?: number;
}
