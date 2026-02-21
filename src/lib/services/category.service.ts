import { CategoryDoc, SortOptions } from "@/src/types";
import { categoryRepository } from "@/src/data/repositories";
import { sort } from "../utils";

export async function listCategories({
  sortBy = "alph",
  sortDirection = "asc",
}: SortOptions): Promise<CategoryDoc[]> {
  const categories = await categoryRepository.getAllCategories();
  return sort(categories, sortBy, sortDirection);
}

export async function createCategory(
  category: CategoryDoc,
): Promise<CategoryDoc> {
  const existing = (await categoryRepository.getAllCategories()).find(
    (c) => c.slug === category.slug,
  );
  if (existing) throw new Error("Já existe uma categoria com esse slug");

  return categoryRepository.addCategory(category);
}

export async function updateCategoryById(
  id: string,
  fields: Partial<CategoryDoc>,
): Promise<CategoryDoc | null> {
  return categoryRepository.updateCategory(id, fields);
}

export async function deleteCategoryById(id: string): Promise<boolean> {
  return categoryRepository.removeCategory(id);
}
