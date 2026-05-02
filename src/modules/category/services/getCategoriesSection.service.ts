import { CATEGORIES } from "../const";
import { CategorySectionType } from "../types";
import { getRecentMediaCardsByCategory } from "@/modules/media";

export default async function getCategoriesSection(): Promise<
  CategorySectionType[]
> {
  const sections = await Promise.all(
    CATEGORIES.map(async ({ key, slug, label }) => {
      const mediaCards = await getRecentMediaCardsByCategory(key);

      return {
        label,
        href: `/${slug}`,
        medias: mediaCards,
      };
    }),
  );

  return sections.sort((a, b) => a.label.localeCompare(b.label, "pt-BR"));
}
