import { getCategories } from "./_features/home/actions";
import { CategorySection } from "./_features/home/components";

export default async function HomePage() {
  const categories = await getCategories();

  return (
    <main>
      {categories.map(({ _id, title, collection }) => (
        <CategorySection
          key={_id}
          categoryTitle={title}
          categoryCollection={collection}
        />
      ))}
    </main>
  );
}
