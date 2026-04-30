import { CATEGORY_CONFIG } from "../config";
import { CategoryKey } from "../types";

export const CATEGORIES: {
  href: string;
  label: string;
}[] = Object.entries(CATEGORY_CONFIG).map(([key, value]) => ({
  href: `/${key as CategoryKey}`,
  label: value.label,
}));
