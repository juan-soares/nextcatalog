import Link from "next/link";
import { getCategories } from "@/app/_lib/services";
import { ICategory } from "@/app/_lib/database/database.interface";

export async function Navbar() {
  const categories: ICategory[] = await getCategories("alph");

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
