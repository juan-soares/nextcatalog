import Link from "next/link";
import Image from "next/image";
import styles from "./SearchResults.module.css";
import { ISearchItem } from "../../types";

interface IProps {
  query: string;
  loading: boolean;
  results: ISearchItem[];
  onClose: () => void;
}

export function SearchResults({ query, loading, results, onClose }: IProps) {
  return (
    <div className={styles.dropdown}>
      {loading && <div className={styles.message}>Pesquisando...</div>}

      {!loading && results.length === 0 && (
        <div className={styles.message}>Sem resultados</div>
      )}

      {!loading &&
        results
          .slice(0, 5)
          .map(
            ({
              _id,
              slug,
              cover,
              title,
              releaseYear,
              translatedTitle,
              categoryTitle,
            }) => (
              <Link
                key={_id}
                href={slug}
                className={styles.item}
                onClick={onClose}
              >
                <Image
                  src={cover}
                  alt={title}
                  width={40}
                  height={60}
                  className={styles.cover}
                />

                <div className={styles.info}>
                  <div className={styles.title}>
                    {title}{" "}
                    {releaseYear && (
                      <span className={styles.year}>({releaseYear})</span>
                    )}
                  </div>

                  {translatedTitle && (
                    <div className={styles.translated}>{translatedTitle}</div>
                  )}

                  <span className={styles.category}>{categoryTitle}</span>
                </div>
              </Link>
            )
          )}

      {!loading && results.length > 0 && (
        <Link href={`/pesquisa?q=${query}`} className={styles.showAll}>
          Ver todos os resultados
        </Link>
      )}
    </div>
  );
}
