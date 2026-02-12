import styles from "./homePage.module.css";
import { listCategories } from "../lib/services";
import { CategorySection } from "../components/home";

export default async function HomePage() {
  const categories = await listCategories({
    sortBy: "alph",
    sortDirection: "asc",
  });

  return (
    <main className={styles.homePage}>
      {categories.map(({ _id, title, slug }) => (
        <CategorySection key={_id} _id={_id} title={title} slug={slug} />
      ))}
    </main>
  );
}
