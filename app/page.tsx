import Link from "next/link";
import styles from "@/app/home.module.css";
import { getAllFranchises } from "./_lib/services";

export default async function Home() {
  const franchises = await getAllFranchises();

  return (
    <div className={styles.home}>
      <div>
        <nav>
          <ul>
            {franchises.map(({ id, slug, logo }) => (
              <Link key={id} href={slug}>
                <img src={logo} alt={`Logotipo da franquia.`} />
              </Link>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
