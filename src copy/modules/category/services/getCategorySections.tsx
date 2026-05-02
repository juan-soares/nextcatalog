import { listMedia } from "@/modules/media";
import { CATEGORIES } from "../const";
import { CategorySection } from "../types";

export async function getCategorySections(): Promise<CategorySection[]> {
  return Promise.all(
    CATEGORIES.map(async ({ key, href, label }) => {
      const { mediaList } = await listMedia({
        category: key,
        searchParams: {
          sort: "recent",
          page: "1",
          limit: "5",
        },
      });

      return {
        label,
        href,
        medias: mediaList,
      };
    }),
  );
}
