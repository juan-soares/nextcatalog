import Link from "next/link";
import { ICollectionInfo } from "@/app/_lib/interfaces";
import { getCategories } from "@/app/_lib/db/collections";

export async function Navbar() {
  const categories: ICollectionInfo[] = await getCategories();

  return (
    <nav>
      {categories.map(({ id, slug, title }) => (
        <Link key={id} href={slug}>
          {title}
        </Link>
      ))}
    </nav>
  );
}
