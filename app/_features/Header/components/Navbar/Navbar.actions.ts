"use server";

import { getCollection } from "@/app/_data/connection";
import { ICategoryLink } from "./Navbar.types";

export async function getCategories(): Promise<ICategoryLink[]> {
  try {
    const categories = await getCollection("categories");
    categories.sort((a, b) =>
      a.title.localeCompare(b.title, "pt", { sensitivity: "base" })
    );
    return categories;
  } catch (error) {
    return [];
  }
}
