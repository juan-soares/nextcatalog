"use server";

import { getCollection } from "@/app/_data/connection";
import { IResultItem } from "./ResultsList.types";

export async function getSearchResults(
  query: string,
  sortBy: string
): Promise<IResultItem[]> {
  if (!query.trim()) return [];

  try {
    const categories = await getCollection("categories");
    const allCategoriesResultsPromise = categories.map(({ collection }) =>
      getCollection(collection)
    );
    const allCategoriesResults = (
      await Promise.all(allCategoriesResultsPromise)
    ).flat();

    console.log(allCategoriesResults);

    return [];
  } catch (error) {
    return [];
  }
}
