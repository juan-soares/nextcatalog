import styles from "./homePage.module.css";
import { CategorySection } from "../components/homePage";
import { listCategoriesWithMediaItemCards } from "../lib/services";

export default async function HomePage() {
  const categorySections = await listCategoriesWithMediaItemCards();

  return (
    <main className={styles.homePage}>
      {categorySections.map(({ _id, title, slug, mediaItemCards }) => (
        <CategorySection
          key={_id}
          title={title}
          slug={slug}
          mediaItems={mediaItemCards}
        />
      ))}
    </main>
  );
}
