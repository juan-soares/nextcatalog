import styles from "./homePage.module.css";
import {
  listCategories,
  listMediaItemsGroupedByCategoryId,
} from "../lib/services";
import { Category } from "../types";
import { CategorySection } from "../components/home";

export default async function HomePage() {
  const categories: Category[] = await listCategories({
    sortBy: "alph",
    sortDirection: "asc",
  });

  const mediaItemsGroupedByCategory = await listMediaItemsGroupedByCategoryId(
    { sortBy: "lastUpdateAt", sortDirection: "desc" },
    5,
  );

  return (
    <main className={styles.homePage}>
      {categories.map(({ _id, title, slug }) => (
        <CategorySection
          key={_id}
          title={title}
          slug={slug}
          mediaItems={mediaItemsGroupedByCategory[_id] ?? []}
        />
      ))}
    </main>
  );
}
