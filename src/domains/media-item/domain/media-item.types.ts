export interface MediaItem {
  id: string;
  title: string;
  translatedTitle: string;
  slug: string;
  cover: string;
  releaseDate: Date;
}

export interface MediaItemFilters {
  genreSlug?: string;
  languageSlug?: string;
  platformSlug?: string;
  mediaTypeSlug?: string;
  franchiseSlug?: string;
}

export type MediaItemSort = {
  by: "alph" | "releaseDate" | "recent";
  direction: "asc" | "desc";
};

export interface MediaItemFindOptions {
  query?: string;
  filters?: MediaItemFilters;
  sort?: MediaItemSort;
  limit?: number;
}
