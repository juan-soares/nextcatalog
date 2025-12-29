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

  const populatedFilters = await Promise.all(
    filters.map(async (filter) => {
      const propertyItems = db.collection(filter.propertyCollection).find({});

      const itemsById = new Map(
        propertyItems.map((item: { _id: string }) => [item._id, item])
      );

      const populatedValues = filter.values
        .map((id: string) => itemsById.get(id))
        .filter(
          (item): item is (typeof propertyItems)[number] => item !== undefined
        );

      return {
        ...filter,
        values: populatedValues,
      };
    })
  );

  return populatedFilters;
}
