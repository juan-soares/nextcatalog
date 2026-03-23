import styles from "./MediaTypeSections.module.css";
import Link from "next/link";
import { listMediaTypes } from "./MediaTypeSections.services";
import { MediaList } from "@/features/mediaItemList/components";

export async function MediaTypeSections() {
  const mediaTypes = await listMediaTypes();

  return (
    <div>
      {mediaTypes.map(({ title, mediaTypeId, href }) => (
        <section className={styles.section}>
          <header className={styles.header}>
            <h2>{title}</h2>
          </header>

          <div className={styles.list}>
            <MediaList
              mediaTypeId={mediaTypeId}
              order={{ sortBy: "recent", sortOrder: "desc" }}
              resultsToShow={5}
            />
          </div>

          <div className={styles.footer}>
            <Link href={href}>Ver todos...</Link>
          </div>
        </section>
      ))}
    </div>
  );
}
