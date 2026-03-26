import { Suspense } from "react";
import styles from "./HomePage.module.css";
import { listHomeSections } from "../../services";
import { HomeSection } from "../HomeSection";

export default async function HomePage() {
  const sections = await listHomeSections();

  return (
    <main className={styles.homePage}>
      <Suspense fallback={<div>Carregando...</div>}>
        {sections.map((section) => (
          <HomeSection key={section.mediaTypeId} section={section} />
        ))}
      </Suspense>
    </main>
  );
}
