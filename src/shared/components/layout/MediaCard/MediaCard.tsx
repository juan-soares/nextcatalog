import Image from "next/image";
import Link from "next/link";
import styles from "./MediaCard.module.css";

interface Props {
  href: string;
  cover: string;
  title: string;
  synopsis: string;
  releaseYear: string;
}

export default function MediaCard({
  href,
  cover,
  title,
  synopsis,
  releaseYear,
}: Props) {
  return (
    <li>
      <Link href={href} className={styles.card}>
        <div className={styles.imageWrapper}>
          <Image src={cover} alt={title} fill className={styles.image} />

          <div className={styles.overlay}>
            <p>{synopsis}</p>
          </div>
        </div>

        <div className={styles.info}>
          <h3>{title}</h3>
          <span>{releaseYear}</span>
        </div>
      </Link>
    </li>
  );
}
