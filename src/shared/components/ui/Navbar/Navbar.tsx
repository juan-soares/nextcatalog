import Link from "next/link";

interface Props {
  links: { id: string; href: string; label: string }[];
}

export default function Navbar({ links }: Props) {
  return (
    <nav>
      <ul>
        {links.map(({ id, href, label }) => (
          <li key={id}>
            <Link href={href}>{label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
