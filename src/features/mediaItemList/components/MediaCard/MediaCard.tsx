import styles from "./MediaCard.module.css";
import Image from "next/image";
import Link from "next/link";

interface Props {
  href: string;
  cover: string;
  synopsis: string;
  title: string;
  releaseYear: string;
}

export function MediaCard({
  href,
  cover,
  synopsis,
  title,
  releaseYear,
}: Props) {
  return (
    <li key={href} className={styles.card}>
      <Link href={href}>
        <div className={styles.imageWrapper}>
          <Image
            src={cover}
            alt={`Capa de ${title}`}
            width={200}
            height={300}
            className={styles.cover}
          />
          <div className={styles.synopsis}>{synopsis}</div>
        </div>
        <div className={styles.info}>
          <h3 className={styles.title}>{title}</h3>
          <span className={styles.year}>({releaseYear})</span>
        </div>
      </Link>
    </li>
  );
}
