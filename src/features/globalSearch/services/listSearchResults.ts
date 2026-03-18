import { SearchResult } from "../types";

export async function listSearchResults(
  query: string,
): Promise<SearchResult[]> {
  if (!query.trim()) return [];

  const res = await fetch(`/api/search?q=${encodeURIComponent(query)}`);

  if (!res.ok) {
    throw new Error("Erro ao buscar resultados");
  }

  return res.json();
}
