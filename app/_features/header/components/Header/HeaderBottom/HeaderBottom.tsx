import Link from "next/link";
import styles from "./HeaderBottom.module.css";

export function HeaderBottom() {
  return (
    <nav className={styles.headerBottom}>
      <Link href={"/temp"}>Page 2</Link>
    </nav>
  );
}
