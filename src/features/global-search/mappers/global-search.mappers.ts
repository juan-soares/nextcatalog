import { SearchResult } from "../types";

export function mediaItemToSearchResult({
  id,
  cover,
  title,
  slug,
  releaseDate,
}: Media): SearchResult {
  return {
    id,
    cover,
    title,
    href: `/${slug}`,
    releaseYear: new Date(releaseDate).getFullYear().toString(),
  };
}
