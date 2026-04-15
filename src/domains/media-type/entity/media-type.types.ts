export type MediaTypeId = string;

export type MediaTypeSlug = string;

export type MediaTypeFilterKey =
  | "genre"
  | "language"
  | "platform"
  | "franchise";

export type MediaTypeSortKey = "recent" | "alphabetical" | "releaseDate";

export type MediaType = {
  id: MediaTypeId;

  title: string;
  slug: MediaTypeSlug;

  description?: string;

  isActive: boolean;

  filters: MediaTypeFilterKey[];

  sortOptions: MediaTypeSortKey[];

  createdAt: Date;
  updatedAt: Date;
};
