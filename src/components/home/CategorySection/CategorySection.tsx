import Link from "next/link";
import styles from "./CategorySection.module.css";
import { MediaList } from "../../ui";
import { MediaItem } from "@/src/types";

interface Props {
  title: string;
  slug: string;
  mediaItems: MediaItem[];
}

export async function CategorySection({ title, slug, mediaItems }: Props) {
  return (
    <section className={styles.categorySection}>
      <h2 className={styles.title}>{title}</h2>

      <MediaList categorySlug={slug} medias={mediaItems} />

      <div className={styles.footer}>
        <Link href={`/${slug}`} className={styles.moreLink}>
          Ver mais...
        </Link>
      </div>
    </section>
  );
}
