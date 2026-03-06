import Link from "next/link";
import styles from "./GlobalSearchResults.module.css";
import { SearchResult } from "@/features/globalSearch/types";
import Image from "next/image";

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
          {results.map(
            ({
              id,
              href,
              cover,
              releaseYear,
              title,
              translatedTitle,
              mediaTypeTitle,
            }) => (
              <li key={id}>
                <Link href={href}>
                  <div>
                    <Image src={cover} alt={`Capa do título ${title}.`} />
                  </div>
                  <div>
                    <p>
                      <span>{`(${releaseYear}) ${title}`}</span>
                      <span>{mediaTypeTitle}</span>
                    </p>
                    <h3>{translatedTitle}</h3>
                  </div>
                </Link>
              </li>
            ),
          )}
        </ul>
      )}
    </div>
  );
}
