import { getCollectionInfoBySlug } from "../_lib/db/collections";
import { RecordsList } from "../_ui/components";
import { Filters } from "./_ul/components";

interface IProps {
  params: Promise<{ category: string }>;
}

export default async function CategoryPage({ params }: IProps) {
  const { category: categorySlug } = await params;
  const { title, slug } = await getCollectionInfoBySlug(categorySlug);

  return (
    <div>
      <h1>{title}</h1>
      <Filters />
      <RecordsList categorySlug={slug} />
    </div>
  );
}
