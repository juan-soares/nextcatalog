import Link from "next/link";
import styles from "./HeaderNav.module.css";
import { listCategories } from "@/src/lib/services";

export async function HeaderNav() {
  const categories = await listCategories({
    sortBy: "alph",
    sortDirection: "asc",
  });

  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        {categories.map(({_id, slug, title}) => (
          <li key={_id} className={styles.item}>
            <Link href={`/${slug}`}>{title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
