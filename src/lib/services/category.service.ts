import {
  CategoryDoc,
  CategoryWithMediaCards,
  MediaItemCard,
  SortOptions,
} from "@/src/types";
import { categoryRepository } from "@/src/data/repositories";
import { listMediaItemCards } from "@/src/lib/services";
import { sort } from "@/src/lib/utils";

export async function listCategories({
  sortBy = "alph",
  sortDirection = "asc",
}: SortOptions): Promise<CategoryDoc[]> {
  const categories = await categoryRepository.getAllCategories();
  return sort(categories, sortBy, sortDirection);
}

export async function listCategoryBySlug(
  slugToSearch: CategoryDoc["slug"],
): Promise<CategoryDoc | null> {
  const allCategories = await categoryRepository.getAllCategories();
  const category: CategoryDoc | null =
    allCategories.find(({ slug }) => slug === slugToSearch) ?? null;
  return category;
}

export async function listCategoriesWithMediaItemCards(): Promise<
  CategoryWithMediaCards[]
> {
  const groupedByCategory: Record<CategoryDoc["_id"], MediaItemCard[]> = {};

  const allMediaItemsCards = await listMediaItemCards({
    sortBy: "lastUpdateAt",
    sortDirection: "desc",
  });

  for (const mediaItemCard of allMediaItemsCards) {
    const categoryId = mediaItemCard.category._id;

    if (!groupedByCategory[categoryId]) {
      groupedByCategory[categoryId] = [];
    }

    groupedByCategory[categoryId].push(mediaItemCard);
  }

  const categoryWithMediaItem: CategoryWithMediaCards[] = Object.values(
    groupedByCategory,
  ).map((cards) => ({ ...cards[0].category, mediaItemCards: cards }));

  return categoryWithMediaItem;
}

export async function listCategoryWithMediaItemCardsByCategoryId(
  categoryIdToSearch: CategoryDoc["_id"],
): Promise<CategoryWithMediaCards | null> {
  const categoriesWithMediaItems = await listCategoriesWithMediaItemCards();
  const categoryWithMediaItems =
    categoriesWithMediaItems.find(({ _id }) => _id === categoryIdToSearch) ??
    null;
  return categoryWithMediaItems;
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
