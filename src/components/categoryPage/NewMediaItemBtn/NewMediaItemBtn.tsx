import Link from "next/link";
import styles from "./NewMediaItemBtn.module.css";

interface Props {
  categorySlug: string;
}

export function NewMediaItemBtn({ categorySlug }: Props) {
  return (
    <Link
      href={`/${categorySlug}/novo`}
      className={styles.button}
      title="Adicionar novo item"
    >
      +
    </Link>
  );
}
