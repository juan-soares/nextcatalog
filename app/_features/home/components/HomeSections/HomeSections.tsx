import { getCategoriesCollection } from "../../actions";
import { CategorySection } from "../CategorySection";

export async function HomeSections() {
  const categoriesCollection = await getCategoriesCollection();

  if (categoriesCollection.length === 0) {
    console.log("Sem collections encontrada.");
    return;
  }

  return (
    <main>
      {categoriesCollection.map((collection) => (
        <CategorySection key={collection} collection={collection} />
      ))}
    </main>
  );
}
