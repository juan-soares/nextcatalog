import Link from "next/link";
import styles from "./FranchisesNav.module.css";
import { getFranchises } from "./FranchisesNav.actions";

export async function FranchisesNav() {
  const franchisesLinks = await getFranchises();

  return (
    <nav className={styles.franchisesNav}>
      <ul>
        {franchisesLinks.map(({ _id, slug, logo, title }) => (
          <li key={_id}>
            <Link href={slug}>
              <img src={logo} alt={`Logotipo da franquia ${title}.`} />
              <strong>{title}</strong>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
