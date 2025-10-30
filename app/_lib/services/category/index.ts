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

    const categoriesInfo: Promise<ICategoryInfo[]> = Promise.all(
      categories.map(async ({ id, translated_title, slug, collection }) => {
        return {
          id,
          title: translated_title,
          slug: slug,
          records: await getCollection<IRecord>(collection),
        };
      })
    );

    return (await categoriesInfo).sort((a, b) =>
      a.title.localeCompare(b.title)
    );
  } catch (error) {
    return [];
  }
}
