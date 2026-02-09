import { Category, SortBy } from "@/src/types";
import { getDocsByCollection } from "../../database/connectDB";
import { sortBy } from "../../utils";

export async function getCategories(order: SortBy): Promise<Category[]> {
  const categories = await getDocsByCollection<Category>("categories");

  return sortBy(categories, order);
}
