import styles from "./FranchisesCarousel.module.css";
import { getFranchises } from "@/src/lib/services";

export async function FranchisesCarousel() {
  const franchises = await getFranchises();

  return (
    <div className={styles.franchisesCarouselContainer}>
      <div className={styles.franchisesCarouselInner}>
        {franchises.map(({ _id, logo, title }) => (
          <div key={_id} className={styles.franchisesCarouselItem}>
            <img src={logo} alt={`Logotipo da franquia ${title}`} />
            <h3>{title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
