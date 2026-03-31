export function toArray(value: string | string[] | undefined): string[] {
  if (!value) return [];
  return Array.isArray(value) ? value : [value];
}

export function toString(
  value: string | string[] | undefined,
): string | undefined {
  if (!value) return undefined;
  return Array.isArray(value) ? value[0] : value;
}
