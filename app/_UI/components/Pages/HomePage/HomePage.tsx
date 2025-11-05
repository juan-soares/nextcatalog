import { ICategoryInfo } from "./HomePage.interface";
import styles from "./HomePage.module.css";
import { CategorySection } from "./CategorySection";

export async function HomePage() {
  const categoriesInfo: ICategoryInfo[] = [];

  return (
    <div className={styles.home}>
      {categoriesInfo.map((categoryInfo) => (
        <CategorySection key={categoryInfo.id} {...categoryInfo} />
      ))}
    </div>
  );
}
