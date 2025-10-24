import styles from "./ResultsList.module.css";

export function ResultList() {
  const results: any = [];

  if (!results.length)
    return <div className={styles.resultsList}>Sem resultados.</div>;

  return (
    <ul>
      {results.map(
        ({ id, cover, title, translatedTitle, release, categoryTitle }) => (
          <li key={id}>
            <div>
              <img src={cover} />
              <span>{title}</span>
              <span>{translatedTitle}</span>
              <span>{release}</span>
              <span>{categoryTitle}</span>
            </div>
          </li>
        )
      )}
    </ul>
  );
}
