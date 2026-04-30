import { CATEGORY_CONFIG } from "../config";

export function isCategoryKey(
  value: string,
): value is keyof typeof CATEGORY_CONFIG {
  return value in CATEGORY_CONFIG;
}
