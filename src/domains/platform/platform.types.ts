import { HydratedDocument } from "mongoose";

export interface Platform {
  label: string;
  code: string;
}

export type PlatformDocument = HydratedDocument<Platform>;

export interface PlatformDTO {
  id: string;
  label: string;
  code: string;
}

export interface PlatformServiceFilters {
  label: string;
}

export type PlatformServiceSort = "label" | "createdAt" | "updatedAt";

export interface PlatformFindOptions {
  filters?: Partial<PlatformServiceFilters>;
  sort?: Partial<Record<PlatformServiceSort, "asc" | "desc">>;
  limit?: number;
}
