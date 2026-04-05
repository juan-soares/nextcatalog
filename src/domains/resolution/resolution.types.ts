import { HydratedDocument } from "mongoose";

export interface Resolution {
  label: string;
  code: string;
}

export type ResolutionDocument = HydratedDocument<Resolution>;

export interface ResolutionDTO {
  id: string;
  label: string;
  code: string;
}

export interface ResolutionServiceFilters {
  label: string;
}

export type ResolutionServiceSort = "label" | "createdAt" | "updatedAt";

export interface ResolutionFindOptions {
  filters?: Partial<ResolutionServiceFilters>;
  sort?: Partial<Record<ResolutionServiceSort, "asc" | "desc">>;
  limit?: number;
}
