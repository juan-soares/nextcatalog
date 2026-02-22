"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import styles from "./Searchbar.module.css";

interface Props {
  initialQuery: string;
}

export function Searchbar({ initialQuery }: Props) {
  const [value, setValue] = useState(initialQuery);
  const router = useRouter();
  const searchParams = useSearchParams();

  function handleSearch() {
    const params = new URLSearchParams(searchParams.toString());

    if (value.trim()) {
      params.set("q", value);
    } else {
      params.delete("q");
    }

    router.push(`?${params.toString()}`);
  }

  return (
    <div className={styles.searchInput}>
      <input
        type="text"
        placeholder="Pesquisar..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
      />
      <button onClick={handleSearch}>Buscar</button>
    </div>
  );
}
