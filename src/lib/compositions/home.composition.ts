import { Category, MediaItem } from "@/src/types";
import { listCategories, listMediaItemsGroupedByCategoryId } from "../services";

interface HomeData {
  categories: Category[];
  mediaItemsGroupedByCategory: Record<Category["_id"], MediaItem[]>;
}

export async function homeData(): Promise<HomeData> {
  const [categories, mediaItemsGroupedByCategory] = (await Promise.all([
    listCategories({
      sortBy: "alph",
      sortDirection: "asc",
    }),
    listMediaItemsGroupedByCategoryId(
      { sortBy: "lastUpdateAt", sortDirection: "desc" },
      5,
    ),
  ])) as [HomeData["categories"], HomeData["mediaItemsGroupedByCategory"]];

  return { categories, mediaItemsGroupedByCategory };
}
