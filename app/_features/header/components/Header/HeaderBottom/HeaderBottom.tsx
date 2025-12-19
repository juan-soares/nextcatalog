import Link from "next/link";
import styles from "./HeaderBottom.module.css";
import { getCategories } from "@/app/_features/home/actions";

export async function HeaderBottom() {
  const categories = await getCategories();

  return (
    <nav className={styles.headerBottom}>
      {categories.map(({ _id, title, slug }) => (
        <Link key={_id} href={slug}>
          {title}
        </Link>
      ))}
    </nav>
  );
}
