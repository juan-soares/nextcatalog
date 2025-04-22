import { Suspense } from "react";
import styles from "@/app/home.module.css";
import { RecentList, FranchisesList } from "./_ui/components";

export default async function Home() {
  return (
    <div className={styles.home}>
      <FranchisesList />
      <Suspense fallback={<p>Carregando...</p>}>
        <RecentList />
      </Suspense>
    </div>
  );
}
