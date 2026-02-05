import { ISubcategory } from "@/app/_data/data.types";
import { db } from "@/app/_data/db";

export async function getSubcategories(): Promise<ISubcategory[]> {
  try {
    const subcategories = await db.collection("subcategories").find({});
    return subcategories;
  } catch (error) {
    console.error("Erro ao consultrar subcategorias:" + error);
    return [];
  }
}
