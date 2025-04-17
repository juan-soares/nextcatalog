import { Suspense } from "react";
import styles from "@/app/home.module.css";
import { RecentList } from "./_ui/components";

export default async function Home() {
  return (
    <div className={styles.home}>
      <Suspense fallback={<p>Carregando...</p>}>
        <RecentList />
      </Suspense>
    </div>
  );
}
