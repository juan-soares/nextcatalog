import Link from "next/link";
import styles from "./Navbar.module.css";
import { ICategory } from "./Navbar.interface";
import { getAllCategories } from "@/app/_lib/actions/category";

export async function Navbar() {
  const categories: ICategory[] = await getAllCategories();

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
