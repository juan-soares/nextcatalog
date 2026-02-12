import styles from "./FranchisesCarousel.module.css";
import { listBaseFranchises } from "@/src/lib/services";
import Image from "next/image";
import Link from "next/link";

export async function FranchisesCarousel() {
  const franchises = await listBaseFranchises({
    sortBy: "alph",
    sortDirection: "asc",
  });

  const minItemsToFill = 20; // ajuste conforme a largura da tela
  const repeatTimes = Math.ceil(minItemsToFill / franchises.length);

  const duplicatedFranchises = Array.from({ length: repeatTimes }).flatMap(
    () => franchises,
  );

  return (
    <div className={styles.carouselWrapper}>
      <div className={styles.carousel}>
        {duplicatedFranchises.map(({ logo, title, slug }, index) => (
          <Link key={index} className={styles.carouselItem} href={slug}>
            <Image
              src={logo}
              alt={title}
              width={80}
              height={80}
              className={styles.logo}
            />
            <span className={styles.title}>{title}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
