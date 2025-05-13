import connectToDatabase from "../../db/connection";

export async function populateField(idToSearch: string, collection: string) {
  const db = await connectToDatabase();

  const populatedValues = db[collection].find(
    ({ id }: { id: string }) => id === idToSearch
  );

  return populatedValues;
}

export async function populateFields(
  idsToSearch: string[],
  collection: string
) {
  const db = await connectToDatabase();

  const populatedValues = Promise.all(
    idsToSearch.map((id) =>
      db[collection].find(({ id: itemId }: { id: string }) => itemId === id)
    )
  );

  return populatedValues;
}
