import Link from "next/link";
import styles from "./ResultList.module.css";
import { IResultItem } from "../../Searchbar.types";

interface IProps {
  loading: boolean;
  results: IResultItem[];
}

export function ResultList({ loading, results }: IProps) {
  if (loading) return <p>Carregando...</p>;
  if (results.length === 0) return <p>Nenhum resultado encontrado.</p>;

  return (
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
  );
}
