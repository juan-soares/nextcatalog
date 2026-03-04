import styles from "./GlobalSearchInput.module.css";

interface Props {
  query: string;
  onValueChange: (value: string) => void;
}

export function GlobalSearchInput({ query, onValueChange }: Props) {
  return (
    <div className={styles.globalSearchInput}>
      <input type="search" placeholder="Pesquisar..." value={query} />
      <button>0-</button>
    </div>
  );
}
