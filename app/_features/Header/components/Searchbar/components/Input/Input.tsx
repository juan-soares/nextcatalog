import Link from "next/link";
import styles from "./Input.module.css";

interface IProps {
  term: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setShowResults: (s: boolean) => void;
}

export function Input({ term, handleChange, setShowResults }: IProps) {
  return (
    <div>
      <input
        className={styles.input}
        type="search"
        placeholder="Pesquisar..."
        value={term}
        onChange={handleChange}
        onFocus={() => term && setShowResults(true)}
        onBlur={() => setTimeout(() => setShowResults(false), 150)}
      />
      <Link href={`/pesquisar?q=${term}`}>
        <button disabled={!term}>0-</button>
      </Link>
    </div>
  );
}
