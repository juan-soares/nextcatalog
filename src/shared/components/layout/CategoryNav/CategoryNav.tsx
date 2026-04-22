import Link from "next/link";

export default function CategoryNav() {
  return (
    <nav>
      <ul>
        {categories.map(({ href, label }) => (
          <li key={href}>
            <Link href={href}>{label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
