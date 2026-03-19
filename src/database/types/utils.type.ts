import { Document, SortOrder } from "mongoose";

export type FindOptions<T extends Document> = {
  query?: Partial<T>;
  sort?: string | Record<string, SortOrder> | [string, SortOrder][];
  limit?: number;
  populate?: (keyof T)[];
};
