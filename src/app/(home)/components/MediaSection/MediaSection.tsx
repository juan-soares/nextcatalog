import { MediaList } from "@/features/mediaItemList/components";
import styles from "./MediaSection.module.css";
import Link from "next/link";

interface Props {
  title: string;
  href: string;
}

export function MediaSection({ title, href }: Props) {
  return (
    <section className={styles.section}>
      <header className={styles.header}>
        <h2>{title}</h2>
      </header>

      <div className={styles.list}>
        <MediaList mediaItemsList={[]}/>
      </div>

      <div className={styles.footer}>
        <Link href={href}>Ver todos...</Link>
      </div>
    </section>
  );
}
