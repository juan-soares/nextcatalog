import { readDB, writeDB } from "./connection";
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
                String(value).toLowerCase().includes(term.toLowerCase()),
              ),
          ),
        );
      }

      if (sortBy === "alph") {
        collectionDocs = collectionDocs.sort((a: any, b: any) =>
          a.title.localeCompare(b.title, "pt", { sensitivity: "base" }),
        );
      } else if (sortBy === "recent") {
        collectionDocs = collectionDocs.sort(
          (a: any, b: any) => a.release - b.release,
        );
      } else {
        collectionDocs = collectionDocs.sort(
          (a: any, b: any) => a.updatedAt - b.updatedAt,
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

  const post = async (newRecord) => {
    try {
      let data = await readDB();
      console.log(newRecord);
      data[collectionTitle].push(newRecord);
      await writeDB(data);

      console.log("Novo registro salvo com sucesso!");
    } catch (error) {
      console.error("Erro ao salvar na collection:" + error);
      return null;
    }
  };

  return { find, post };
}

export const db = {
  collection,
};
