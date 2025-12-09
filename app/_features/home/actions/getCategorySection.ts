import { db } from "@/app/_data/db";
import { ICategoryInfo, ICategoryRecord } from "../types";

export async function getCategorySection(): Promise<ICategoryInfo[]> {
  try {
    const categories = await db.collection("categories").find({});

    const categoriesInfo = await Promise.all(
      categories.map(async ({ _id, collection, title, slug }) => {
        const results = await db
          .collection(collection)
          .find({ sortBy: "recent", limit: 5 });

        return { _id, title, slug, results };
      })
    );

    return categoriesInfo;
  } catch (error) {
    console.log("Erro ao consultar seções:" + error);
    return [];
  }
}
