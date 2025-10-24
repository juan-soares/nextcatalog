"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./Searchbar.module.css";
import { ResultList } from "./ResultsList";

export function Searchbar() {
  const [term, setTerm] = useState("");

  return (
    <div className={styles.searchbar}>
      <input
        type="search"
        value={term}
        placeholder="Pesquisar..."
        onChange={(e) => setTerm(e.target.value)}
      />
      <Link href={`/pesquisar?q=${term}`}>
        <button type="submit" disabled={!term}>
          0-
        </button>
      </Link>
      {term && <ResultList />}
    </div>
  );
}
