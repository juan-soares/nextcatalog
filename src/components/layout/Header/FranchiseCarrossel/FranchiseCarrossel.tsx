import styles from "./FranchiseCarrossel.module.css";
import Link from "next/link";
import Image from "next/image";
import { listFranchiseLinks } from "./FranchiseCarrosel.service";

export async function FranchiseCarrossel() {
  const franchiseLinks = await listFranchiseLinks();

  return (
    <nav className={styles.franchiseCarrossel}>
      <div className={styles.track}>
        <ul className={styles.list}>
          {[...franchiseLinks, ...franchiseLinks].map(
            ({ href, logo, label }, index) => (
              <li key={index} className={styles.item}>
                <Link href={href} className={styles.link}>
                  <Image
                    src={logo}
                    alt={`Logotipo da franquia ${label}.`}
                    width={150}
                    height={90}
                  />
                  <span>{label}</span>
                </Link>
              </li>
            ),
          )}
        </ul>
      </div>
    </nav>
  );
}
