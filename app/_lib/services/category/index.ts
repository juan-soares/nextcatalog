import { getCollection } from "../../database/connection";
import { ICategory, ICategoryInfo, IRecord } from "./category.interface";

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

export async function getCategoriesInfo(): Promise<ICategoryInfo[]> {
  try {
    const categories = await getCollection<ICategory>("categories");

    const sortedCategories = categories.sort((a, b) =>
      a.translated_title.localeCompare(b.translated_title, "pt", {
        sensitivity: "base",
      })
    );

    const categoriesInfo = await Promise.all(
      sortedCategories.map(
        async ({ id, translated_title, slug, collection }) => ({
          id,
          title: translated_title,
          slug,
          records: await getCollection<IRecord>(collection),
        })
      )
    );

    return categoriesInfo;
  } catch (error) {
    console.error("Erro ao carregar categorias:", error);
    return [];
  }
}
