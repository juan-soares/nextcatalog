export type SortBy = "alph" | "createdAt" | "lastUpdateAt";

export type SortDirection = "asc" | "desc";

export interface SortOptions {
  sortBy: SortBy;
  sortDirection: SortDirection;
}
