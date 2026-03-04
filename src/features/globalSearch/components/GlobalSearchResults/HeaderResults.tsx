import Link from "next/link";
import styles from "./GlobalSearchResults.module.css";
import { useEffect, useState } from "react";

interface Props {
  query: string;
  isLoading: boolean;
  setIsLoading: (is: boolean) => void;
}

export function GlobalSearchResults({ query, isLoading, setIsLoading }: Props) {
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (!query) {
      setResults([]);
      return;
    }

    const updateResults = async () => {
      setIsLoading(true);
      const res = [] as any;
      setResults(res);
      setIsLoading(false);
    };

    updateResults();
  }, [query, setIsLoading]);

  return (
    <div className={styles.globalSearchResults}>
      {!isLoading && !results.length && <p>Sem resultados.</p>}
      {!isLoading && results.length > 0 && (
        <ul>
          {results.map(({ id, href, title }) => (
            <li key={id}>
              <Link href={href}>{title}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
