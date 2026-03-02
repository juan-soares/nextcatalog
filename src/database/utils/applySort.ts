import { MongoDoc } from "../types";

export function applySort<T extends MongoDoc>(
  items: T[],
  sortBy?: keyof T,
  order: "asc" | "desc" = "asc",
): T[] {
  if (!sortBy) return [...items];

  const sortedItems = [...items].sort((a, b) => {
    const aVal = a[sortBy];
    const bVal = b[sortBy];

    if (typeof aVal === "string" && typeof bVal === "string") {
      return order === "asc"
        ? aVal.localeCompare(bVal)
        : bVal.localeCompare(aVal);
    }

    const aNum = aVal instanceof Date ? aVal.getTime() : (aVal as any);
    const bNum = bVal instanceof Date ? bVal.getTime() : (bVal as any);

    return order === "asc" ? aNum - bNum : bNum - aNum;
  });

  return sortedItems;
}
