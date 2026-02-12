import Link from "next/link";
import styles from "./CategorySection.module.css";
import { MediaItem } from "@/src/types";
import { MediaList } from "../../ui";
import { listMediaItemsByCategoryId } from "@/src/lib/services";

interface Props {
  _id: string;
  title: string;
  slug: string;
}

export async function CategorySection({ _id, title, slug }: Props) {
  const categoryMedias: MediaItem[] = await listMediaItemsByCategoryId(
    _id,
    { sortBy: "lastUpdateAt", sortDirection: "desc" },
    5,
  );

  return (
    <section className={styles.categorySection}>
      <h2 className={styles.title}>{title}</h2>

      <MediaList categorySlug={slug} medias={categoryMedias} />

      <div className={styles.footer}>
        <Link href={`/${slug}`} className={styles.moreLink}>
          Ver mais...
        </Link>
      </div>
    </section>
  );
}
