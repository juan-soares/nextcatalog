import { CategoryCollectionType, IDatabase } from "@/app/_data/data.types";
import { db } from "@/app/_data/db";

export async function getCategoryRecordsByCollection(
  collection: CategoryCollectionType
) {
  const records = await db.collection(collection).find({});
  return records;
}

export async function getCategoryFilters(category: CategoryCollectionType) {
  const filters = await db.collection("filters").find({
    query: {
      termsToSearch: [category],
      fieldsToSearch: ["categoriesCollection"],
    },
    sortBy: "alph",
  });

  return filters;
}
