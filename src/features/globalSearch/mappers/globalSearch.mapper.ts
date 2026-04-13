import { MediaItem } from "@/domains/media-item";
import { SearchResult } from "../types";

export const globalSearchMapper = {
  toSearchResult({
    id,
    slug,
    title,
    translatedTitle,
    cover,
    releaseDate,
    mediaType,
  }: MediaItem): SearchResult {
    return {
      id,
      href: `/${slug}`,
      title,
      translatedTitle,
      cover,
      releaseYear: new Date(releaseDate).getFullYear().toString(),
      mediaTypeLabel: mediaType.label,
    };
  },
};
