"use server";

import Link from "next/link";
import styles from "./MediaTypeFilters.module.css";

interface Props {
  href: string;
  filters: any[];
}

export default async function MediaTypeFilters({ href, filters }: Props) {
  return (
    <aside className={styles.mediaTypeFilters}>
      <div>
        <input type="search" placeholder="Pesquisar..." />
        <Link href={`${href}/novo`}>
          <button type="button">+</button>
        </Link>
      </div>
    </aside>
  );
}
