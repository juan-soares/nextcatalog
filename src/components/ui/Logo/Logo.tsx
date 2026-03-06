import Link from "next/link";
import Image from "next/image";
import styles from "./Logo.module.css";

export function Logo() {
  return (
    <Link href="/" className={styles.logo}>
      <Image
        src="/assets/logo/logo.png"
        alt="Logotipo do site."
        width={120}
        height={40}
      />
    </Link>
  );
}
