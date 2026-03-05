import Link from "next/link";
import styles from "./GlobalSearchResults.module.css";
import { SearchResult } from "@/features/globalSearch/types";

interface Props {
  query: string;
  isLoading: boolean;
  results: SearchResult[];
}

export function GlobalSearchResults({ query, isLoading, results }: Props) {
  if (!query.trim()) return null;

  return (
    <div className={styles.globalSearchResults}>
      {isLoading && <p>Carregando...</p>}
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
