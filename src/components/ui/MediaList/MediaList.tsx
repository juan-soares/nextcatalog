import styles from "./MediaList.module.css";
import { MediaItem, MediaItemCard } from "@/src/types";
import { MediaListItem } from "./MediaListItem";

interface Props {
  medias: MediaItem[];
  categorySlug: string;
}

export function MediaList({ medias, categorySlug }: Props) {
  if (!medias || medias.length === 0) {
    return <p className={styles.emptyMessage}>Sem itens na lista.</p>;
  }

  const mediasCardInfo: MediaItemCard[] = medias.map(
    ({
      _id,
      title,
      synopsis,
      cover,
      slug,
      releaseDate,
      createdAt,
      lastUpdateAt,
    }) => ({
      _id,
      title,
      synopsis,
      cover,
      slug,
      releaseYear: new Date(releaseDate).getFullYear().toString(),
      createdAt,
      lastUpdateAt,
    }),
  );

  return (
    <ul className={styles.mediaList}>
      {mediasCardInfo.map((mediaInfo) => (
        <MediaListItem
          key={mediaInfo._id}
          categorySlug={categorySlug}
          media={mediaInfo}
        />
      ))}
    </ul>
  );
}
