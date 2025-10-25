import styles from "./ResultsList.module.css";
import { IResultItem } from "./ResultsList.interface";
import Link from "next/link";

export function ResultList() {
  const results: IResultItem[] = [];

  if (!results.length)
    return <div className={styles.resultsList}>Sem resultados.</div>;

  return (
    <ul>
      {results.map(
        ({
          id,
          slug,
          cover,
          title,
          translatedTitle,
          release,
          categoryTitle,
        }) => (
          <li key={id}>
            <Link href={slug}>
              <div>
                <img src={cover} />
                <span>{title}</span>
                <span>{translatedTitle}</span>
                <span>{release}</span>
                <span>{categoryTitle}</span>
              </div>
            </Link>
          </li>
        )
      )}
    </ul>
  );
}
