import { ICategoryInfo } from "./HomePage.interface";
import styles from "./HomePage.module.css";
import { CategorySection } from "./CategorySection";

export async function HomePage() {
  const categories: ICategoryInfo[] = [];

  return (
    <div className={styles.home}>
      {categories.map((categoryInfo) => (
        <CategorySection {...categoryInfo} />
      ))}
    </div>
  );
}
