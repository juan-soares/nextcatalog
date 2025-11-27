import Link from "next/link";
import Image from "next/image";
import styles from "./Logo.module.css";

export function Logo() {
  return (
    <Link href="/" className={styles.logo}>
      <Image
        src="/img/icons/logo.png"
        alt="Logo"
        width={120}
        height={40}
        className={styles.image}
        priority
      />
    </Link>
  );
}
