import Link from "next/link";
import styles from "./Navbar.module.css";
import { getAllCategories } from "@/app/_lib/services";

export async function Navbar() {
  const categories = await getAllCategories("alph");

  return (
    <nav className={styles.navbar}>
      <ul>
        {categories.map(({ id, slug, translated_title }) => (
          <li key={id}>
            <Link href={slug}>{translated_title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
