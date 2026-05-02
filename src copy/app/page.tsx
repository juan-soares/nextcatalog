import { CategorySection, getCategorySections } from "@/modules/category";

export default async function HomePage() {
  const categorySections = await getCategorySections();

  /* const categories = Object.keys(CATEGORY_CONFIG);

  const sections = await Promise.all(
    categories.map(async (category) => {
      const { mediaList } = await listMedia({
        category,
        searchParams: {
          sort: "recent",
          page: "1",
        },
      });

      return {
        category,
        mediaList: mediaList.slice(0, 5),
      };
    }),
  );
*/

  return (
    <main>
      {categorySections.map((categorySection) => (
        <CategorySection key={categorySection.href} {...categorySection} />
      ))}
    </main>
  );
}
