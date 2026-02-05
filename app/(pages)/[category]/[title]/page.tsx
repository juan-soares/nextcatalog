import { CategoryCollectionType } from "@/app/_data/data.types";
import { getTitle } from "@/app/_lib/actions/getTite";

import styles from "./page.module.css";
import { TabsSeasons } from "@/app/_features/TabsSeasons";

/* TIPOS */
export type SubCategory =
  | "TV-Show"
  | "ova"
  | "extra"
  | "files"
  | "chronology"
  | "images"
  | "trailer";

/* TYPE GUARD */
const isSubCategory = (value: string): value is SubCategory => {
  return value === "season" || value === "ova" || value === "extra";
};

export default async function CategoryTitlePage({
  params,
}: {
  params: Promise<{ category: string; title: string }>;
}) {
  const actualSeason = 1;

  const { category, title: recordTitle } = await params;

  const categoryTitle = await getTitle(
    category as CategoryCollectionType,
    recordTitle,
  );

  if (!categoryTitle) return null;

  const { title, translatedTitle, seasons, releaseDate, themes, franchises } =
    categoryTitle;

  const currentSeason = seasons[actualSeason - 1];

  const initialTab: SubCategory = isSubCategory(currentSeason.subcategory)
    ? currentSeason.subcategory
    : "season";

  return (
    <main className={styles.page}>
      {/* HERO */}
      <section className={styles.hero}>
        <video
          className={styles.backgroundVideo}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={currentSeason.cover}
          aria-hidden
        >
          <source src={currentSeason.trailer} type="video/mp4" />
        </video>

        <div className={styles.heroContent}>
          <h1 className={styles.title}>{title}</h1>
          <h2 className={styles.subtitle}>{translatedTitle}</h2>

          <p className={styles.synopsis}>{currentSeason.synopsis}</p>

          <strong className={styles.year}>
            {releaseDate.toString().slice(0, 4)}
          </strong>

          <ul className={styles.themes}>
            <li>Leg</li>
            <li>1080p</li>
          </ul>

          <ul className={styles.themes}>
            {themes.map(({ _id, title }) => (
              <li key={_id}>{title}</li>
            ))}
          </ul>

          <ul className={styles.franchises}>
            {franchises.map(({ _id, logo, title }) => (
              <li key={_id}>
                <img src={logo} alt={`Logo ${title}`} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* TABS + CONTEÚDO */}
      <TabsSeasons seasons={seasons} initialTab={initialTab} />
    </main>
  );
}
