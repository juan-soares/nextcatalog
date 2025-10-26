import Link from "next/link";
import styles from "./FranchisesCarousel.module.css";
import { IFranchise } from "./FranchisesCarousel.interface";

export function FranchisesCarousel() {
  const franchises: IFranchise[] = [];

  return (
    <nav className={styles.franchisesCarousel}>
      <Link href="/franquias">Ver todos.</Link>
      <ul>
        {franchises.map(({ id, slug, logo, title }) => (
          <li key={id}>
            <Link href={slug}>
              <img src={logo} alt={`Logotipo da Franquia ${title}.`} />
              <span>{title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
