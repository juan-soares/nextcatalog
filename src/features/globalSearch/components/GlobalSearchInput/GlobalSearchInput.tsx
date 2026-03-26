import styles from "./GlobalSearchInput.module.css";
import Link from "next/link";
import { Search } from "lucide-react";

interface Props {
  query: string;
  onValueChange: (value: string) => void;
}

export default function GlobalSearchInput({ query, onValueChange }: Props) {
  return (
    <div className={styles.globalSearchInput}>
      <input
        type="search"
        placeholder="Pesquisar..."
        value={query}
        onChange={({ target: { value } }) => onValueChange(value)}
      />

      <Link
        href={{
          pathname: "/pesquisar",
          query: { q: query },
        }}
      >
        <button>
          <Search size={18} strokeWidth={2} />
        </button>
      </Link>
    </div>
  );
}
