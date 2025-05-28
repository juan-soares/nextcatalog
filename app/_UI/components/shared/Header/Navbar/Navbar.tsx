import Link from "next/link";
import { getCategories } from "@/app/_lib/services";

export async function Navbar() {
  const categories = await getCategories("alph");

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
