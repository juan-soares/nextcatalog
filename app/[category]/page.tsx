import { getCategoryBySlug } from "../_lib/services";
import { Filters, Results } from "../_UI/components/CategoryPage";

interface IProps {
  params: Promise<{ category: string }>;
}

export default async function CategoryPage({ params }: IProps) {
  const { category: categoryParam } = await params;
  const categorySlug = `/${categoryParam}`;
  const categoryInfo = await getCategoryBySlug(categorySlug);

  if (!categoryInfo) return <p>Ops! Algo deu errado.</p>;

  const { title, collection } = categoryInfo;

  return (
    <div>
      <h1>{title}</h1>
      <Filters />
      <Results categorySlug={categorySlug} categoryCollection={collection} />
    </div>
  );
}
