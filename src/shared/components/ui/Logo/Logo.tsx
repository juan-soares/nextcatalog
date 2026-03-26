import styles from "./Logo.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <Link className={styles.logo} href="/">
      <Image
        priority
        width={80}
        height={80}
        alt="Logotipo do site."
        src="/assets/logo/logo.png"
      />
    </Link>
  );
}
