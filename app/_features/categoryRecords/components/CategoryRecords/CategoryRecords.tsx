import { IDatabase } from "@/app/_data/data.types";
import { getCategoryRecordsByCollection } from "./CategoryRecords.actions";
import Link from "next/link";

interface IProps {
  collection: keyof IDatabase;
  categoryTitle: string;
  categorySlug: string;
}

export async function CategoryRecords({
  collection,
  categoryTitle,
  categorySlug,
}: IProps) {
  const categoryRecords = await getCategoryRecordsByCollection(collection);

  return (
    <div>
      <h1>{categoryTitle}</h1>
      <aside></aside>
      <main>
        {categoryRecords.length === 0 && (
          <section>
            <p>
              Sem itens na lista.
              <Link href={`${categorySlug}/novo`}>Adicionar?</Link>
            </p>
          </section>
        )}
        {categoryRecords.length > 0 && (
          <ul>
            {categoryRecords.map(
              ({ _id, slug, cover, title, releaseYear, synopsis }) => (
                <li key={_id} title={synopsis}>
                  <Link href={slug}>
                    <img src={cover} alt={`Capa do título ${title}.`} />
                    <strong>{title}</strong>
                    <span>{releaseYear}</span>
                  </Link>
                </li>
              )
            )}
          </ul>
        )}
      </main>
    </div>
  );
}
