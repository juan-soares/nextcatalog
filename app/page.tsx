import styles from "@/app/home.module.css";
import { FranchiseLogoSlider } from "./_UI/components/HomePage";

export default async function Home() {
  return (
    <div className={styles.home}>
      <FranchiseLogoSlider />
    </div>
  );
}
