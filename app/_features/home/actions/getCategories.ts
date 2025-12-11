import { ICategory } from "@/app/_data/data.types";
import { db } from "@/app/_data/db";

export async function getCategories(): Promise<ICategory[]> {
  const categories = await db.collection("categories").find({});

  return categories;
}
