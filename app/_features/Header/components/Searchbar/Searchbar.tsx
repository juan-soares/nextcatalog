"use client";

import { useEffect, useState } from "react";
import styles from "./Searchbar.module.css";
import Link from "next/link";
import { getSearch } from "@/app/_data/connection";

export function Searchbar() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(async () => {
      if (query.length < 2) {
        setResults([]);
        return;
      }

      setLoading(true);
      const res = await getSearch(query, 5);
      setResults([]);
      setLoading(false);
    }, 300);

    return () => clearTimeout(timeout);
  }, [query]);

  return (
    <div className={styles.searchBar}>
      <div>
        <input
          type="search"
          placeholder="Pesquisar..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Link href={`/pesquisa?q=`}>
          <button>0-</button>
        </Link>
      </div>
      <div>
        {loading && <div>Buscando...</div>}
        {results.length > 0 && (
          <ul>
            {results.map(({ id, slug, title }) => (
              <Link key={id} href={slug}>
                <li key={id}>{title}</li>
              </Link>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
