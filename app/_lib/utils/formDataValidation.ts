export function getString(formData: FormData, key: string): string {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

export function getStringArray(formData: FormData, key: string): string[] {
  return formData
    .getAll(key)
    .filter((value): value is string => typeof value === "string");
}

export function getBoolean(formData: FormData, key: string): boolean {
  return formData.get(key) === "true";
}

export function getFile(formData: FormData, key: string): File | null {
  const value = formData.get(key);

  if (!value) return null;
  if (!(value instanceof File)) return null;
  if (value.size === 0) return null;

  return value;
}

export function getFileArray(formData: FormData, key: string): File[] {
  const values = formData.getAll(key);
  const files = values.filter(
    (v): v is File => v instanceof File && v.size > 0
  );

  return files;
}
