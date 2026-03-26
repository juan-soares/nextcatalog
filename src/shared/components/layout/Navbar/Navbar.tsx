import styles from "./Navbar.module.css";
import Link from "next/link";
import { listLinks } from "./Navbar.services";

export default async function Navbar() {
  const links = await listLinks();

  return (
    <nav className={styles.navbar}>
      {links.map(({ href, label }) => (
        <Link key={href} href={href}>
          {label}
        </Link>
      ))}
    </nav>
  );
}
