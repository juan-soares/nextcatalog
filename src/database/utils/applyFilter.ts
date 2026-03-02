import { MongoDoc } from "../types";

export function applyFilter<T extends MongoDoc>(
  items: T[],
  filter?: Partial<T>,
): T[] {
  if (!filter) return items;
  return items.filter((item) =>
    Object.entries(filter).every(
      ([key, value]) => item[key as keyof T] === value,
    ),
  );
}
