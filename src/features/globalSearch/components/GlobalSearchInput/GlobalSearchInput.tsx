import styles from "./GlobalSearchInput.module.css";

interface Props {
  query: string;
  onValueChange: (query: string) => void;
}

export function GlobalSearchInput({ query, onValueChange }: Props) {
  return (
    <div style={styles.globalSearchInput}>
      <input
        type="search"
        placeholder="Pesquisar..."
        value={query}
        onChange={({ target: { value } }) => onValueChange(value)}
      />
      <button>0-</button>
    </div>
  );
}
