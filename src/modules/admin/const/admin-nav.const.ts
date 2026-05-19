import { CATEGORIES } from "@/modules/category";

export const adminMenu = [
  ...CATEGORIES.map(({ key, slug, label }) => ({
    key,
    label,
    href: `/admin/${slug}`,
  })),
];
