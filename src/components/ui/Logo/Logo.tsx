import Link from "next/link";
import Image from "next/image";
import styles from "./Logo.module.css";

export function Logo() {
  return (
    <Link href="/" className={styles.logo}>
      <Image
        src="/img/icons/logo.png"
        alt="Logotipo da página Catalogeek."
        width={120}
        height={70}
        priority
      />
    </Link>
  );
}
