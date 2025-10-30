import { getCollection } from "../../database/connection";
import { ICategory } from "./category.interface";

export async function getAllCategories(
  sortBy: "alph" | null
): Promise<ICategory[]> {
  const categories = await getCollection<ICategory>("categories");

  if (sortBy === "alph")
    return categories.sort((a, b) =>
      a.translated_title.localeCompare(b.translated_title)
    );

  return categories;
}
