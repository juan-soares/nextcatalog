import Link from "next/link";
import { getCategoriesSection } from "@/modules/category";
import { MediaList } from "@/modules/media";

export default async function HomePage() {
  const categoriesSection = await getCategoriesSection();

  return (
    <main>
      {categoriesSection.map(({ label, medias, href }) => (
        <section key={href}>
          <h2>{label}</h2>
          <MediaList list={medias} />
          <Link href={href}>Ver mais...</Link>
        </section>
      ))}
    </main>
  );
}
