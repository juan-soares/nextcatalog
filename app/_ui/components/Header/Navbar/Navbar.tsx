import { ICategory } from "@/app/_lib/interfaces";
import { getCategories } from "@/app/_lib/db";
import Link from "next/link";

export async function Navbar() {
  const categories: ICategory[] = await getCategories();

  return (
    <nav>
      <ul>
        {categories.map(({ id, slug, title }) => (
          <Link key={id} href={slug}>
            {title}
          </Link>
        ))}
      </ul>
    </nav>
  );
}
