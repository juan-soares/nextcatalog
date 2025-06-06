import { ICategory } from "@/app/_lib/database/database.interface";
import { getCategoryRecordsByCollection } from "@/app/_lib/services";
import { EmptyList } from "../../shared";

interface IProps {
  category: ICategory;
}

export async function CategorySection({ category }: IProps) {
  const { title, collection, slug } = category;
  const categoryRecords = await getCategoryRecordsByCollection(collection);

  return (
    <section>
      <h2>{title}</h2>
      {!categoryRecords.length && <EmptyList slug={slug} />}
      {categoryRecords.map(({ id, title }) => (
        <div key={id}>
          <h3>{title}</h3>
        </div>
      ))}
    </section>
  );
}
