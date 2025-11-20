import Link from "next/link";
import styles from "./Input.module.css";

interface IProps {
  term: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  toggleShowResults: (term?: string) => void;
}

export function Input({ term, handleChange, toggleShowResults }: IProps) {
  return (
    <div>
      <input
        className={styles.input}
        type="search"
        placeholder="Pesquisar..."
        value={term}
        onChange={handleChange}
        onFocus={() => toggleShowResults(term)}
        onBlur={() => toggleShowResults()}
      />
      <Link href={`/pesquisar?q=${term}`}>
        <button disabled={!term}>0-</button>
      </Link>
    </div>
  );
}
