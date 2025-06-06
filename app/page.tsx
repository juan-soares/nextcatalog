import styles from "@/app/home.module.css";
import { ICategory } from "./_lib/database/database.interface";
import {
  FranchiseLogoSlider,
  CategorySection,
} from "./_UI/components/HomePage";
import { getCategories } from "./_lib/services";

export default async function Home() {
  const categories: ICategory[] = await getCategories("alph");

  return (
    <div className={styles.home}>
      <FranchiseLogoSlider />
      {categories.map((category) => (
        <CategorySection key={category.id} category={category} />
      ))}
    </div>
  );
}
