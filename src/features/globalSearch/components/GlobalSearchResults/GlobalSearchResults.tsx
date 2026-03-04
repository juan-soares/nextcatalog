import Link from "next/link";
import styles from "./GlobalSearchResults.module.css";
import { SearchResult } from "@/features/globalSearch/types";

interface Props {
  isLoading: boolean;
  results: SearchResult[];
}

export function GlobalSearchResults({ isLoading, results }: Props) {
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
