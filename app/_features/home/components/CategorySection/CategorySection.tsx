import Link from "next/link";
import { getCategoryRecentRecords } from "../../actions";
import { IDatabase } from "@/app/_data/data.types";
import styles from "./CategorySection.module.css";

interface IProps {
  categoryTitle: string;
  categoryCollection: keyof IDatabase;
  categorySlug: string;
}

export async function CategorySection({
  categoryTitle,
  categoryCollection,
  categorySlug,
}: IProps) {
  const categoryRecentRecords = await getCategoryRecentRecords(
    categoryCollection
  );

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>{categoryTitle}</h2>
      {categoryRecentRecords.length === 0 && (
        <section>
          <p>Sem itens na lista.</p>
        </section>
      )}
      {categoryRecentRecords.length > 0 && (
        <ul className={styles.list}>
          {categoryRecentRecords.map(
            ({ _id, slug, cover, title, releaseYear }) => (
              <li key={_id} className={styles.item}>
                <Link href={slug}>
                  <img
                    src={cover}
                    alt={`Capa do título ${title}.`}
                    className={styles.cover}
                  />
                  <strong>{title}</strong>
                  <span>{releaseYear}</span>
                </Link>
                <Link href={categorySlug} className={styles.showAll}>
                  Mostar todos.
                </Link>
              </li>
            )
          )}
        </ul>
      )}
    </section>
  );
}
