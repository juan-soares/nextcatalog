import Link from "next/link";
import styles from "./Navbar.module.css";
import { ICategory } from "./Navbar.interface";

export function Navbar() {
  const categories: ICategory[] = [];

  return (
    <nav className={styles.navbar}>
      <ul>
        {categories.map(({ id, slug, title }) => (
          <li key={id}>
            <Link href={slug}>{title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
