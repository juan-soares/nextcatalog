import { readDB } from "./connection";
import { IDatabase, IFindParameters } from "./data.types";

function collection<T extends keyof IDatabase>(collectionTitle: T) {
  const find = async ({
    query,
    limit,
    sortBy,
  }: IFindParameters): Promise<IDatabase[T]> => {
    try {
      const db = await readDB();
      let collectionDocs = db[collectionTitle];

      if (!collection)
        throw new Error(`Collection ${collectionTitle} não encontrada.`);

      if (query?.termsToSearch.length && query?.fieldsToSearch.length) {
        const { fieldsToSearch, termsToSearch } = query;

        collectionDocs = collectionDocs.filter((doc) =>
          Object.entries(doc).some(
            ([key, value]) =>
              fieldsToSearch.includes(key) &&
              termsToSearch.some((term) =>
                String(value).toLowerCase().includes(term.toLowerCase())
              )
          )
        );
      }

      if (sortBy === "alph") {
        collectionDocs = collectionDocs.sort(
          (a: any, b: any) => a.title - b.title
        );
      } else if (sortBy === "recent") {
        collectionDocs = collectionDocs.sort(
          (a: any, b: any) => a.release - b.release
        );
      } else {
        collectionDocs = collectionDocs.sort(
          (a: any, b: any) => a.updatedAt - b.updatedAt
        );
      }

      if (limit) {
        collectionDocs = collectionDocs.slice(0, limit);
      }

      return collectionDocs;
    } catch (error) {
      console.error("Erro em find:" + error);
      return [];
    }
  };

  return { find };
}

export const db = {
  collection,
};
