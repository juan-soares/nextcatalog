import { SortOrder } from "mongoose";
import { MediaItemFilters, MediaItemSort } from "../domain";

type MongoSort = Record<string, SortOrder>;

export function buildFilters(filters?: MediaItemFilters) {
  if (!filters) return {};

  const mongoFilters: Record<string, any> = {};

  if (filters.genreSlug) mongoFilters.genreSlug = filters.genreSlug;
  if (filters.languageSlug) mongoFilters.languageSlug = filters.languageSlug;
  if (filters.platformSlug) mongoFilters.platformSlug = filters.platformSlug;
  if (filters.mediaTypeSlug) mongoFilters.mediaTypeSlug = filters.mediaTypeSlug;
  if (filters.franchiseSlug) mongoFilters.franchiseSlug = filters.franchiseSlug;

  return mongoFilters;
}

export function buildSort(sort?: MediaItemSort): MongoSort | undefined {
  if (!sort) return undefined;

  const direction: SortOrder = sort.direction === "asc" ? 1 : -1;

  switch (sort.by) {
    case "alph":
      return { title: direction };

    case "releaseDate":
      return { releaseDate: direction };

    case "recent":
      return { createdAt: -1 };

    default:
      return undefined;
  }
}

export function buildTextSearch(query?: string) {
  if (!query) return {};

  return {
    $or: [
      { title: { $regex: query, $options: "i" } },
      { translatedTitle: { $regex: query, $options: "i" } },
    ],
  };
}
