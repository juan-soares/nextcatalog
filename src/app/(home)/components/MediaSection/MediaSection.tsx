import { MediaList } from "@/features/mediaItemList/components";
import styles from "./MediaSection.module.css";
import Link from "next/link";
import { MediaItemCardInfo } from "@/features/mediaItemList/type";

interface Props {
  title: string;
  href: string;
  mediaItemCardsInfo: MediaItemCardInfo[];
}

export function MediaSection({ title, href, mediaItemCardsInfo }: Props) {
  return (
    <section className={styles.section}>
      <header className={styles.header}>
        <h2>{title}</h2>
      </header>

      <div className={styles.list}>
        <MediaList mediaItemCardsInfo={mediaItemCardsInfo} />
      </div>

      <div className={styles.footer}>
        <Link href={href}>Ver todos...</Link>
      </div>
    </section>
  );
}
