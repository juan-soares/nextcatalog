import styles from "./FranchisesCarousel.module.css";
import { listBaseFranchises } from "@/src/lib/services";
import Image from "next/image";

export async function FranchisesCarousel() {
  const franchises = await listBaseFranchises({
    sortBy: "alph",
    sortDirection: "asc",
  });

  return (
    <div className={styles.carouselWrapper}>
      <div className={styles.carousel}>
        {franchises.map(({ _id, logo, title }) => (
          <div key={_id} className={styles.carouselItem}>
            <Image
              src={logo}
              alt={title}
              width={80}
              height={80}
              className={styles.logo}
            />
            <span className={styles.title}>{title}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
