import { MediaItemDoc } from "../types";

export function applyFilter<T extends MediaItemDoc>(
  items: T[],
  filter?: string,
): T[] {
  if (!filter) return items;

  const normalizedFilter = filter.toLocaleLowerCase();

  return items.filter(
    ({ title, translatedTitle }) =>
      title.toLocaleLowerCase().includes(normalizedFilter) ||
      translatedTitle?.toLocaleLowerCase().includes(normalizedFilter),
  );
}
