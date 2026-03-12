export type FindOptions<T> = {
  filter?: Partial<T>;
  sortBy?: keyof T;
  order?: "asc" | "desc";
  limit?: number;
  populate?: boolean;
};
