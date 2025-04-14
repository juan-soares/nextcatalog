import { getCategoriesBySlug } from "../_lib/db";
import { Filters, RecordsList } from "./components";

interface IProps {
  params: Promise<{ category: string }>;
}

export default async function CategoryPage({ params }: IProps) {
  const { category } = await params;
  const categoryInfo = await getCategoriesBySlug(category);

  return (
    <div>
      <h1>{categoryInfo.title}</h1>
      <Filters />
      <RecordsList categoryCollection={categoryInfo.collection} />
    </div>
  );
}
