export type FindOptions<T> = {
  filter?: string;
  sortBy?: keyof T;
  order?: "asc" | "desc";
  limit?: number;
};
