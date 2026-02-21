import styles from "./homePage.module.css";
import { homeData } from "../lib/compositions";
import { CategorySection } from "../components/home";

export default async function HomePage() {
  const { categories, mediaItemsGroupedByCategory } = await homeData();

  return (
    <main className={styles.homePage}>
      {categories.map(({ _id, title, slug }) => (
        <CategorySection
          key={_id}
          title={title}
          slug={slug}
          mediaItems={mediaItemsGroupedByCategory[_id] || []}
        />
      ))}
    </main>
  );
}
