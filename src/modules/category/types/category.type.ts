import { CATEGORY_CONFIG } from "../config/category.config";

export type CategoryKey = keyof typeof CATEGORY_CONFIG;

export type Category = {
  label: string;
  slug: string;
  key: CategoryKey;
};
