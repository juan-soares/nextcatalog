import { CATEGORY_CONFIG } from "../config";
import { CategoryKey } from "../types";

export const CATEGORIES: {
  key: string;
  href: string;
  label: string;
}[] = Object.entries(CATEGORY_CONFIG).map(([key, value]) => ({
  key: value.slug,
  href: `/${key as CategoryKey}`,
  label: value.label,
}));
