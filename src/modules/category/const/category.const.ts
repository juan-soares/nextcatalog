import { CATEGORY_CONFIG } from "../config";
import { Category, CategoryKey } from "../types";

export const CATEGORIES: Category[] = Object.entries(CATEGORY_CONFIG).map(
  ([key, value]) => ({
    key: key as CategoryKey,
    slug: value.slug,
    label: value.label,
  }),
);
