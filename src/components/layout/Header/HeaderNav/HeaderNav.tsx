import Link from "next/link";
import styles from "./HeaderNav.module.css";
import { getCategories } from "@/src/lib/services/categories";

export async function HeaderNav() {
  const categories = await getCategories("alph");

  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        {categories.map(({ _id, slug, title }) => {
          return (
            <li key={_id}>
              <Link href={`/${slug}`} className={styles.link}>
                {title}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
