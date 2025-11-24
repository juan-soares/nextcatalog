import Link from "next/link";
import styles from "./CategoriesNav.module.css";
import { ICategoryLink } from "./CategoriesNav.types";
import { getCategories } from "./CategoriesNav.actions";

export async function CategoriesNav() {
  const categoriesLink: ICategoryLink[] = await getCategories();

  return (
    <nav className={styles.navbar}>
      <ul>
        {categoriesLink.map(({ _id, slug, title }) => (
          <li key={_id}>
            <Link href={`/${slug}`}>{title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
