import Link from "next/link";
import styles from "./ResultList.module.css";
import { IResultItem } from "../Searchbar.types";

interface IProps {
  isLoading: boolean;
  results: IResultItem[];
  term: string;
}

export function ResultList({ isLoading, results, term }: IProps) {
  if (!term) return null;

  return (
    <div>
      {isLoading && <p>Pesquisando...</p>}
      {!isLoading && results.length > 0 && (
        <ul className={styles.resultList}>
          {results.map(
            ({
              _id,
              slug,
              cover,
              title,
              releaseYear,
              translatedTitle,
              categoryTitle,
            }) => (
              <li key={_id}>
                <Link href={slug}>
                  <img src={cover} alt={`Capa do resultado ${title}.`} />
                  <div>
                    <strong>{`${title} (${releaseYear})`}</strong>
                    <p>{translatedTitle}</p>
                    <span>{categoryTitle}</span>
                  </div>
                </Link>
              </li>
            )
          )}
        </ul>
      )}
      {!isLoading && results.length === 0 && <p>Nada encontrado.</p>}
    </div>
  );
}
