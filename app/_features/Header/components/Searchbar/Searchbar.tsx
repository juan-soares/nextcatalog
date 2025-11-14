"use client";

import Link from "next/link";
import styles from "./Searchar.module.css";
import { useSearch } from "./Searchbar.hooks";
import { Input, ResultsList } from "./components";

export function Searchbar() {
  const { query, handleChange } = useSearch();

  return (
    <div>
      <Input term={query} handleChange={handleChange} />
    </div>
  );
}
