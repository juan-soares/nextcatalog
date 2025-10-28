import Link from "next/link";
import styles from "./CategorySection.module.css";

interface IProps {
  title: string;
  records: [];
  slug: string;
}

export function CategorySection({ title, records, slug }: IProps) {
  return (
    <section className={styles.categorySection}>
      <h2>{title}</h2>
      <div>
        <ul>
          {records.map(({ id, slug, cover, title, releaseYear }) => (
            <li key={id}>
              <Link href={slug}>
                <img src={cover} alt={`Capa do título ${title}.`} />
                {`(${releaseYear})`}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <Link href={slug}>Ver todos.</Link>
      </div>
    </section>
  );
}
