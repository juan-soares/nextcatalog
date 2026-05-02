import Link from "next/link";
import { CATEGORIES } from "../../const";

export default function CategoryNav() {
  const sortedCategories = [...CATEGORIES].sort((a, b) =>
    a.label.localeCompare(b.label, "pt-BR"),
  );

  return (
    <nav>
      {sortedCategories.map(({ slug, label }) => (
        <Link key={slug} href={`/${slug}`}>
          {label}
        </Link>
      ))}
    </nav>
  );
}
