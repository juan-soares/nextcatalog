import styles from "./MediaList.module.css";
import { MediaItem, MediaItemCard } from "@/src/types";
import { MediaListItem } from "./MediaListItem";

interface Props {
  medias: MediaItem[];
  categorySlug: string;
}

export function MediaList({ medias, categorySlug }: Props) {
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
        <MediaListItem categorySlug={categorySlug} media={mediaInfo} />
      ))}
    </ul>
  );
}
