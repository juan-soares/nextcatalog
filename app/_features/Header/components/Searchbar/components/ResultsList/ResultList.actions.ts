"use server";

import { getCollection } from "@/app/_data/connection";
import { IResultItem } from "./ResultsList.types";
import { ICategory } from "@/app/_data/data.types";

export async function getSearchResults(query: string): Promise<IResultItem[]> {
  if (!query.trim()) return [];

  try {
    const categories = await getCollection("categories");
    const promises = categories.map(async ({ collection }) => {
      const data = await getCollection(collection);
      return Array.isArray(data) ? data : [];
    });
    const results: IResultItem[] = (await Promise.all(promises)).flat();

    const lowerQuery = query.toLowerCase();

    const filtered = results.filter(
      ({ title, translatedTitle }) =>
        title.toLowerCase().includes(lowerQuery) ||
        translatedTitle.toLowerCase().includes(lowerQuery)
    );

    const sorted: IResultItem[] = filtered.sort((a, b) =>
      a.title.localeCompare(b.title, "pt-BR", { sensitivity: "base" })
    );
    const limited = sorted.slice(0, 5);

    return limited;
  } catch (error) {
    console.error("Erro ao filtrar resultados:", error);
    return [];
  }
}
