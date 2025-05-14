import { getAllCategoriesRecords } from "../../db/collections";
import connectToDatabase from "../../db/connection";

export const populate = {
  field: async (idToSearch: string, collection: string) => {
    const db = await connectToDatabase();

    if (collection === "all") {
      const allCategoriesRecords = await getAllCategoriesRecords();
      const populatedValues = allCategoriesRecords.find(
        ({ id }) => id === idToSearch
      );

      return populatedValues || null;
    }

    const populatedValues = db[collection].find(
      ({ id }: { id: string }) => id === idToSearch
    );

    return populatedValues;
  },

  fields: async (idsToSearch: string[], collection: string) => {
    const db = await connectToDatabase();

    const populatedValues = Promise.all(
      idsToSearch.map((id) =>
        db[collection].find(({ id: itemId }: { id: string }) => itemId === id)
      )
    );

    return populatedValues;
  },
};
