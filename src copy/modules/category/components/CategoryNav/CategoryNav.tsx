import Link from "next/link";
import { CATEGORIES } from "../../const";

export default function CategoryNav() {
  const sortedCategories = [...CATEGORIES].sort((a, b) =>
    a.label.localeCompare(b.label),
  );

  return (
    <nav>
      {sortedCategories.map(({ href, label }) => (
        <Link key={href} href={href}>
          {label}
        </Link>
      ))}
    </nav>
  );
}
