import Link from "next/link";
import styles from "./Input.module.css";

interface IProps {
  term: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function Input({ term, handleChange }: IProps) {
  return (
    <div>
      <input
        className={styles.input}
        type="search"
        placeholder="Pesquisar..."
        value={term}
        onChange={handleChange}
      />
      <Link href={`/pesquisar?q=${term}`}>
        <button>0-</button>
      </Link>
    </div>
  );
}
