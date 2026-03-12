import { MongoDoc } from "../types";

export function applyFilter<T extends MongoDoc>(
  items: T[],
  filter?: Partial<Record<keyof T, string>>,
): T[] {
  if (!filter) return items;

  return items.filter((item) =>
    Object.entries(filter).every(([key, value]) => {
      const field = item[key as keyof T];

      // só filtra campos que são string
      if (typeof field !== "string") return false;

      return field.toLowerCase().includes(value.toLowerCase());
    }),
  );
}
