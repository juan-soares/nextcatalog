import { getCollection } from "../../database/connection";

export async function getAllCategories() {
  const categories = await getCollection("categories");
  return categories;
}
