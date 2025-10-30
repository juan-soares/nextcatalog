import { ICategoryInfo } from "./HomePage.interface";
import styles from "./HomePage.module.css";
import { CategorySection } from "./CategorySection";
import { getCategoriesInfo } from "@/app/_lib/services";

export async function HomePage() {
  const categories: ICategoryInfo[] = await getCategoriesInfo();

  return (
    <div className={styles.home}>
      {categories.map((categoryInfo) => (
        <CategorySection key={categoryInfo.id} {...categoryInfo} />
      ))}
    </div>
  );
}
