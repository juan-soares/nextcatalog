import styles from "./StickyContainer.module.css";
import { Header } from "../Header";
import { FranchisesCarousel } from "../FranchisesCarousel";

export function StickyContainer() {
  return (
    <div className={styles.stickyContainer}>
      <Header />
    </div>
  );
}
