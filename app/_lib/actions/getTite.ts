import {
  CategoryCollectionType,
  IAnimePopulated,
} from "@/app/_data/data.types";
import { db } from "@/app/_data/db";

export async function getTitle(
  collection: CategoryCollectionType,
  slug: string,
): Promise<IAnimePopulated | null> {
  try {
    const title = await db
      .collection(collection)
      .find({ query: { termsToSearch: [slug], fieldsToSearch: ["slug"] } });

    const record = title[0];

    const recordThemes = await db.collection("themes").find({
      query: { termsToSearch: record.themesId, fieldsToSearch: ["_id"] },
    });

    const franchisesPopulated = await db.collection("franchises").find({
      query: { termsToSearch: record.franchisesId, fieldsToSearch: ["_id"] },
    });

    const seasonsPopulated = await Promise.all(
      record.seasons.map(async (season) => {
        const result = await db.collection("subcategories").find({
          query: {
            fieldsToSearch: ["_id"],
            termsToSearch: [season.subcategoryId],
          },
        });

        return {
          ...season,
          subcategory: result?.[0] ?? null,
        };
      }),
    );

    return {
      ...record,
      themes: recordThemes,
      seasons: seasonsPopulated,
      franchises: franchisesPopulated,
    };
  } catch (error) {
    console.error("Erro ao consultrar subcategorias:" + error);
    return null;
  }
}
