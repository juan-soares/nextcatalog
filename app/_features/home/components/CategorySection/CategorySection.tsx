import Link from "next/link";
import { getCategoryRecentRecords } from "../../actions";
import { IDatabase } from "@/app/_data/data.types";

interface IProps {
  categoryTitle: string;
  categoryCollection: keyof IDatabase;
}

export async function CategorySection({
  categoryTitle,
  categoryCollection,
}: IProps) {
  const categoryRecentRecords = await getCategoryRecentRecords(
    categoryCollection
  );

  return (
    <section>
      <h2>{categoryTitle}</h2>
      <ul>
        {categoryRecentRecords.map(
          ({ _id, slug, cover, title, releaseYear }) => (
            <li key={_id}>
              <Link href={slug}>
                <img src={cover} alt={`Capa do título ${title}.`} />
                <strong>{title}</strong>
                <span>{releaseYear}</span>
              </Link>
            </li>
          )
        )}
      </ul>
    </section>
  );
}
