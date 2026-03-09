import { MediaItemDocPopulated } from "@/database/types";
import { SearchResult } from "../types";

export function mediaItemsToSearchResults(
  mediaItemsPopulated: MediaItemDocPopulated[],
): SearchResult[] {
  return mediaItemsPopulated.map(
    ({
      _id,
      slug,
      cover,
      releaseDate,
      title,
      translatedTitle,
      mediaType: { label: mediaTypeTitle },
    }) => ({
      id: _id,
      href: `/${slug}`,
      cover,
      releaseYear: releaseDate.getFullYear().toLocaleString(),
      title,
      translatedTitle,
      mediaTypeTitle,
    }),
  );
}
