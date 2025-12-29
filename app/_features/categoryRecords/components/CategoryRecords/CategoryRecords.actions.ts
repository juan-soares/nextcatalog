import { CategoryCollectionType, IDatabase } from "@/app/_data/data.types";
import { db } from "@/app/_data/db";

export async function getCategoryRecordsByCollection(
  collection: CategoryCollectionType
) {
  const records = await db.collection(collection).find({});
  return records;
}

export async function getCategoryFilters(collection: CategoryCollectionType) {
  const filters = await db.collection("filters").find({
    query: { termsToSearch: [collection], fieldsToSearch: ["collection"] },
    sortBy: "alph",
  });

  const filtersPopulated = filters.map((filter) => {
   const valuesPopulated = filter.values.map(value => {
    const populated = db.collection("")
   })
  })

  return filters;
}
