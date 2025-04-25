import styles from "@/app/home.module.css";
import { FranchisesList } from "./_ui/components";

export default async function Home() {
  return (
    <div className={styles.home}>
      <FranchisesList />
    </div>
  );
}
