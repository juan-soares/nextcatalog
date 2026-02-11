import { SortBy, SortDirection } from "@/src/types";

export function sort<
  T extends { title: string; createdAt: string; lastUpdateAt: string },
>(
  listToSort: T[],
  sortBy: SortBy = "alph",
  sortDirection: SortDirection = "asc",
): T[] {
  const sorted = [...listToSort].sort((a, b) => {
    let cmp = 0;

    switch (sortBy) {
      case "alph":
        cmp = (a.title ?? "").localeCompare(b.title ?? "");
        break;
      case "createdAt":
        cmp = new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
        break;
      case "lastUpdateAt":
        cmp =
          new Date(a.lastUpdateAt).getTime() -
          new Date(b.lastUpdateAt).getTime();
        break;
    }

    return sortDirection === "asc" ? cmp : -cmp;
  });

  return sorted;
}
