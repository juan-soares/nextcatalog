import Link from "next/link";
import styles from "./Navbar.module.css";
import { ICategoryLink } from "./Navbar.types";
import { getCategories } from "./Navbar.actions";

export async function Navbar() {
  const categories: ICategoryLink[] = await getCategories();

  return (
    <nav className={styles.navbar}>
      <ul>
        {categories.map(({ id, slug, title }) => (
          <li key={id}>
            <Link href={`/${slug}`}>{title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
