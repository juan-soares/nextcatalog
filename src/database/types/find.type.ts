import { SortOrder } from "mongoose";

export interface FindAllOptions<Filters> {
  filter?: Partial<Filters>;
  sort?: Record<string, SortOrder>;
  limit?: number;
}
