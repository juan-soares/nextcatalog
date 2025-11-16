"use server";

import { IResultItem } from "./Searchbar.types";

export async function getSearchResults(term: string): Promise<IResultItem[]> {
  if (!term.trim()) return [];

  try {
    const results: IResultItem[] = [];
    return results;
  } catch (error) {
    console.error(error);
    return [];
  }
}
