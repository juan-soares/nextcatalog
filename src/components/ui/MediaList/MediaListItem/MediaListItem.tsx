import Link from "next/link";
import styles from "./MediaListItem.module.css";
import { MediaItemCard } from "@/src/types";

interface Props {
  categorySlug: string;
  media: MediaItemCard;
}

export function MediaListItem({
  categorySlug,
  media: { slug, cover, synopsis, title, releaseYear },
}: Props) {
  return (
    <li className={styles.mediaListItem}>
      <Link href={`/${categorySlug}/${slug}`} className={styles.link}>
        <div className={styles.imageWrapper}>
          <img src={cover} alt={title} className={styles.image} />
          <div className={styles.tooltip}>{synopsis}</div>
        </div>

        <h3 className={styles.title}>{title}</h3>
        <span className={styles.year}>{releaseYear}</span>
      </Link>
    </li>
  );
}
