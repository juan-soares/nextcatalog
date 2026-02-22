"use client";

import { useRouter, useSearchParams } from "next/navigation";
import styles from "./Sortbar.module.css";

interface Props {
  currentSort: string;
}

export function Sortbar({ currentSort }: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();

  function handleSort(sort: string) {
    const params = new URLSearchParams(searchParams.toString());
    params.set("sort", sort);
    router.push(`?${params.toString()}`);
  }

  return (
    <div className={styles.sortBar}>
      <button
        className={currentSort === "a-z" ? styles.active : ""}
        onClick={() => handleSort("a-z")}
      >
        A–Z
      </button>

      <button
        className={currentSort === "recente" ? styles.active : ""}
        onClick={() => handleSort("recente")}
      >
        Recente
      </button>

      <button
        className={currentSort === "lancamento" ? styles.active : ""}
        onClick={() => handleSort("lancamento")}
      >
        Lançamento
      </button>
    </div>
  );
}
