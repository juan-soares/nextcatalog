import Link from "next/link";
import Image from "next/image";
import styles from "./GlobalSearchResults.module.css";
import { SearchResult } from "@/features/globalSearch/types";

interface Props {
  query: string;
  isLoading: boolean;
  results: SearchResult[];
}

export default function GlobalSearchResults({
  query,
  isLoading,
  results,
}: Props) {
  if (!query.trim()) return null;

  return (
    <div className={styles.globalSearchResults}>
      {isLoading ? (
        <p>Carregando...</p>
      ) : !results.length ? (
        query.trim() ? (
          <p>Sem resultados.</p>
        ) : null
      ) : (
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
                <Link href={href} className={styles.resultLink}>
                  <div className={styles.row}>
                    <Image
                      src={cover}
                      alt={`Capa do título ${title}.`}
                      width={60}
                      height={90}
                      className={styles.cover}
                    />

                    <div className={styles.content}>
                      <div className={styles.lineTop}>
                        <span>{`(${releaseYear}) ${title}`}</span>
                      </div>
                      <div className={styles.lineMiddle}>
                        <span>{translatedTitle}</span>
                      </div>
                      <div className={styles.lineBottom}>
                        <span>{mediaTypeTitle}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </li>
            ),
          )}
          <li className={styles.showAll}>
            <Link href={`/pesquisar?q=${query}`}>Ver todos...</Link>
          </li>
        </ul>
      )}
    </div>
  );
}
