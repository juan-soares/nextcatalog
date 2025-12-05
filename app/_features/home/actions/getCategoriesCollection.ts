"use server";

import { db } from "@/app/_data/db";

export async function getCategoriesCollection(): Promise<string[]> {
  const categoriesCollection = (await db.collection("categories").find({})).map(
    ({ collection }) => collection
  );

  return categoriesCollection;
}
