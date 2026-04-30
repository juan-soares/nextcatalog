import Link from "next/link";
import { CATEGORIES } from "../../const";

export default function CategoryNav() {
  return (
    <nav>
      {CATEGORIES.map(({ href, label }) => (
        <Link key={href} href={href}>
          {label}
        </Link>
      ))}
    </nav>
  );
}
