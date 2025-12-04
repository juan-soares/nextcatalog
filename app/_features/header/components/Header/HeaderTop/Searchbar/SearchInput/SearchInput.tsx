"use client";

import Link from "next/link";
import styles from "./SearchInput.module.css";

interface IProps {
  value: string;
  onChange: (value: string) => void;
  onFocus: () => void;
}

export function SearchInput({ value, onChange, onFocus }: IProps) {
  const hasQuery = value.trim().length > 0;

  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        placeholder="Buscar..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={onFocus}
      />

      <Link
        href={hasQuery ? `/pesquisa?q=${value}` : "/pesquisa"}
        className={styles.button}
      >
        Pesquisar
      </Link>
    </div>
  );
}
