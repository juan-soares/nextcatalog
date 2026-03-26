import styles from "./Navbar.module.css";
import Link from "next/link";
import { NavLink } from "./Navbar.types";

interface Props {
  links: NavLink[];
}

export default function Navbar({ links }: Props) {
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
