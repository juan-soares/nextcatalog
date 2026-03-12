import { MediaItemDoc } from "@/database/types";
import { SearchResult } from "../types";

export function mediaItemsToSearchResults(
  mediaItemsDoc: MediaItemDoc[],
): SearchResult[] {
  return mediaItemsDoc.map(
    ({
      _id,
      slug,
      cover,
      releaseDate,
      title,
      translatedTitle,
      mediaTypeId,
    }) => ({
      id: _id,
      href: `/${slug}`,
      cover,
      releaseYear: releaseDate.getFullYear().toLocaleString(),
      title,
      translatedTitle,
      mediaTypeTitle: typeof mediaTypeId === "string" ? "" : mediaTypeId.label,
    }),
  );
}
