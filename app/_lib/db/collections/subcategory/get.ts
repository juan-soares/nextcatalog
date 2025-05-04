import { ISubcategory } from "@/app/_lib/interfaces/subcategory";
import connectToDatabase from "../../connection";

export async function getSubcategoriesByCategoryCollection(
  categoryCollectionToFind: string
): Promise<ISubcategory[]> {
  try {
    const db = await connectToDatabase();

    const { id: categoryIdToFind } = db["collectionsInfo"].find(
      ({ collection }: { collection: string }) =>
        collection === categoryCollectionToFind
    );

    return db["subcategories"].filter(
      ({ category }: { category: string }) => category === categoryIdToFind
    );
  } catch (error) {
    return [];
  }
}
