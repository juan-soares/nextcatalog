import { SortBy } from "@/src/types";

export function sortBy<
  T extends { title: string; createdAt: string; lastUpdateAt: string },
>(listToSort: T[], order: SortBy): T[] {
  switch (order) {
    case "alph":
      return [...listToSort].sort((a, b) =>
        (a.title ?? "").localeCompare(b.title ?? ""),
      );

    case "createdAt":
      return [...listToSort].sort(
        (a, b) =>
          new Date(b.createdAt ?? 0).getTime() -
          new Date(a.createdAt ?? 0).getTime(),
      );

    case "lastUpdateAt":
      return [...listToSort].sort(
        (a, b) =>
          new Date(b.lastUpdateAt ?? 0).getTime() -
          new Date(a.lastUpdateAt ?? 0).getTime(),
      );

    default:
      return [...listToSort];
  }
}
