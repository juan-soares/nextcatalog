export type SortTypeMap = "release" | "alph" | "recent";

export function sortBy(listToSort: any[], sortType: SortTypeMap): any[] {
  if (sortType === "alph")
    return [...listToSort].sort((a, b) => a.title.localeCompare(b.title));

  if (sortType === "release")
    return [...listToSort].sort(
      (a, b) => new Date(a.release).getTime() - new Date(b.release).getTime()
    );

  return [...listToSort].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
}
