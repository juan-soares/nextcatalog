import { QueryFilter, SortOrder } from "mongoose";

export interface FindAllOptions<Filters> {
  filter?: QueryFilter<Filters>;
  sort?: Record<string, SortOrder>;
  limit?: number;
}
