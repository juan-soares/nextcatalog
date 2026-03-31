"use server";

import Link from "next/link";
import styles from "./MediaTypeFilters.module.css";

interface Props {
  href: string;
}

interface Filter {
  id: string;
  key:string;
  label: string;
  options: [];
}

export default async function MediaTypeFilters({ href }: Props) {
  const filters: Filter[] = [];

  return (
    <aside className={styles.mediaTypeFilters}>
      <div>
        <input type="search" placeholder="Pesquisar..." />
        <Link href={`${href}/novo`}>
          <button type="button">+</button>
        </Link>
      </div>
      {filters.map(({ id, label, key, options }) => (
        <fieldset key={id}>
          <legend>{label}</legend>
          {options.map(({ id, value }) => (
            <div key={id}>
              <input type="checkbox" id={key} value={value} />
              <label htmlFor={id}>{value}</label>
            </div>
          ))}
        </fieldset>
      ))}
    </aside>
  );
}
