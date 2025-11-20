"use server";

import { ICategoryLink } from "./Navbar.types";
import { db } from "@/src/_data/db";

export async function getCategories(): Promise<ICategoryLink[]> {
  try {
    const categories = await db
      .collection("categories")
      .find({ sortBy: "alph" });

    const categoriesLinks: ICategoryLink[] = categories.map(
      ({ _id, slug, title }) => ({ _id, slug, title })
    );

    return categoriesLinks;
  } catch (error) {
    console.error("Erro em getCategories:" + error);
    return [];
  }
}
