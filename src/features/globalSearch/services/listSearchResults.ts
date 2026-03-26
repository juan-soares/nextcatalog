import { SearchResult } from "@/features/globalSearch/types";
import { globalSearchMapper } from "@/features/globalSearch/mappers";
import { MediaItem } from "@/domains/mediaItem";

export async function listSearchResults(
  query: string,
): Promise<SearchResult[]> {
  if (!query.trim()) return [];

  const res = await fetch(`/api/search?q=${encodeURIComponent(query)}`);

  if (!res.ok) {
    throw new Error("Erro ao buscar resultados");
  }

  const mediaItems: MediaItem[] = await res.json();

  return mediaItems.map(globalSearchMapper.toSearchResult);
}
