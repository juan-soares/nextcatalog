"use client";

import { useMemo, useState } from "react";
import styles from "../../(pages)/[category]/[title]/page.module.css";
import { SubCategory } from "@/app/(pages)/[category]/[title]/page";

interface Season {
  _id: string;
  number: number;
  title?: string;
  releaseDate: Date;
  language: string;
  subcategory: SubCategory;
  episodes: {
    _id: string;
    number: number;
    title: string;
    aquired: boolean;
    finished: boolean;
  }[];
}

interface TabsSeasonsProps {
  seasons: Season[];
  initialTab: SubCategory;
}

const TABS: { key: SubCategory; label: string }[] = [
  { key: "TV-Show", label: "Temporadas" },
  { key: "ova", label: "OVA" },
  { key: "extra", label: "Extras" },
  { key: "chronology", label: "Cronologia" },
  { key: "trailer", label: "Trailer" },
  { key: "images", label: "Galeria" },
  { key: "files", label: "Arquivos" },
];

export function TabsSeasons({ seasons, initialTab }: TabsSeasonsProps) {
  const [activeTab, setActiveTab] = useState<SubCategory>(initialTab);

  const filteredSeasons = useMemo(
    () => seasons.filter((s) => s.subcategory === activeTab),
    [seasons, activeTab],
  );

  return (
    <>
      {/* NAV */}
      <nav className={styles.nav}>
        {TABS.map(({ key, label }) => (
          <button
            key={key}
            data-active={activeTab === key}
            onClick={() => setActiveTab(key)}
          >
            {label}
          </button>
        ))}
      </nav>

      {/* CONTENT */}
      <section className={styles.seasons}>
        <ul className={styles.seasonList}>
          {filteredSeasons.map(
            ({ _id, number, title, releaseDate, episodes, language }) => (
              <li key={_id} className={styles.season}>
                <h3 className={styles.seasonTitle}>
                  {`Temporada ${number} - ${
                    title || "Sem título"
                  } (${releaseDate.toString().slice(0, 4)}) [${language}]`}
                </h3>

                <ul className={styles.episodeList}>
                  {episodes.map(
                    ({
                      _id,
                      releaseDate,
                      number: episodeNumber,
                      title: episodeTitle,
                      aquired,
                      finished,
                    }) => (
                      <li key={_id} className={styles.episode}>
                        <p>
                          {`(${releaseDate}) T${number} x E${episodeNumber} - ${episodeTitle}`}
                        </p>

                        <div className={styles.episodeStatus}>
                          <span data-active={aquired}>Adquirido</span>
                          <span data-active={finished}>Finalizado</span>
                        </div>
                      </li>
                    ),
                  )}
                </ul>
              </li>
            ),
          )}
        </ul>
      </section>
    </>
  );
}
