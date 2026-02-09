import Link from "next/link";
import styles from "./Navbar.module.css";
import { getCategories } from "@/src/lib/services/categories";

export async function Navbar() {
  const categories = await getCategories("alph");

  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        {categories.map(({ _id, slug, title }) => (
          <li key={_id} className={styles.navItem}>
            <Link href={`/${slug}`} className={styles.navLink}>
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
