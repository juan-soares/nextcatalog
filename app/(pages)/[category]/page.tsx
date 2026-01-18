import { CategoryRecords } from "@/app/_features/categoryRecords";
import { getCategories } from "@/app/_features/home/actions";

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const categorySlug = (await params).category;

  const category = (await getCategories()).find(
    (c) => c.slug === "/" + categorySlug,
  );
  if (!category) return <p>Categoria não identificada.</p>;

  return (
    <CategoryRecords
      collection={category.collection}
      categoryTitle={category.title}
      categorySlug={category.slug}
    />
  );
}
