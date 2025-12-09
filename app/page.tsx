import { getCategorySection } from "./_features/home/actions";

export default async function HomePage() {
  const categorySection = await getCategorySection();

  return <main></main>;
}
