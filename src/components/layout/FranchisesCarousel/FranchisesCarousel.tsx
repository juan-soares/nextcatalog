import styles from "./FranchisesCarousel.module.css";

export function FranchisesCarousel() {
  return (
    <div className={styles.franchisesCarouselContainer}>
      <div className={styles.franchisesCarouselInner}>
        <div className={styles.franchisesCarouselItem}>
          <img src="/srt" alt="Logotipo da franquia." />
          <h3>franchise1</h3>
        </div>
      </div>
    </div>
  );
}
