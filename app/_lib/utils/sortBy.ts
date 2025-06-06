import { CollectionsTitleMap, IDatabase } from "../database/database.interface";

export type SortTypeByColletion = {
  animes: "alph" | "recent" | "release";
  franchises: "alph" | "recent";
  categories: "alph" | "recent";
};

export function sortBy<C extends CollectionsTitleMap>(
  listToSort: IDatabase[C],
  sortType: SortTypeByColletion[C]
): any[] {
  if (sortType === "alph")
    return [...listToSort].sort((a, b) => a.title.localeCompare(b.title));

  /* if (sortType === "release")
    return [...listToSort].sort(
      (a, b) => new Date(a.release).getTime() - new Date(b.release).getTime()
    ); */

  return [...listToSort].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
}
