import styles from "./Navbar.module.css";
import Link from "next/link";
import { listNavLinks } from "./Navbar.service";

export async function Navbar() {
  const links = await listNavLinks();

  return (
    <nav className={styles.navbar}>
      <ul>
        {links.map(({ href, label }) => (
          <li key={href}>
            <Link href={href}>{label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
