import { getCategories } from "./_features/home/actions";
import { CategorySection } from "./_features/home/components";

export default async function HomePage() {
  const categories = await getCategories();

  return (
    <main style={{ padding: "0 2rem" }}>
      {categories.map(({ _id, title, collection, slug }) => (
        <CategorySection
          key={_id}
          categoryTitle={title}
          categoryCollection={collection}
          categorySlug={slug}
        />
      ))}
    </main>
  );
}
