import Link from "next/link";
import { MediaList } from "../../ui";
import styles from "./CategorySection.module.css";
import { MediaItem } from "@/src/types";

interface Props {
  title: string;
  slug: string;
}

export function CategorySection({ title, slug }: Props) {
  const categoryMidias: MediaItem[] = [];

  return (
    <section className={styles.categorySection}>
      <h2 className={styles.title}>{title}</h2>

      <MediaList categorySlug={slug} medias={categoryMidias} />

      <div className={styles.footer}>
        <Link href={`/${slug}`} className={styles.moreLink}>
          Ver mais...
        </Link>
      </div>
    </section>
  );
}
