import styles from "./MediaList.module.css";
import { MediaItemCard } from "@/src/types";
import { MediaListItem } from "./MediaListItem";

interface Props {
  medias: MediaItemCard[];
  categorySlug: string;
}

export function MediaList({ medias, categorySlug }: Props) {
  if (!medias || medias.length === 0) {
    return <p className={styles.emptyMessage}>Sem itens na lista.</p>;
  }

  return (
    <ul className={styles.mediaList}>
      {medias.map((mediaInfo) => (
        <MediaListItem
          key={mediaInfo._id}
          categorySlug={categorySlug}
          media={mediaInfo}
        />
      ))}
    </ul>
  );
}
