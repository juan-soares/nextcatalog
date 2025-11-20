import Link from "next/link";
import styles from "./ResultList.module.css";
import { IResultItem } from "../Searchbar.types";

interface IProps {
  loading: boolean;
  results: IResultItem[];
  empty: boolean;
  term: string;
}

export function ResultList({ loading, results, empty, term }: IProps) {
  if (!term) return null;

  return (
    <div>
      {loading && <p>Pesquisando...</p>}
      {!loading && results.length > 0 && (
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
      {empty && <p>Nada encontrado.</p>}
    </div>
  );
}
