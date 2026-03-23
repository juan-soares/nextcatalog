import styles from "./MediaList.module.css";

import { MediaCard } from "../MediaCard";
import { MediaItemCardInfo, MediaTypeSort } from "../../type";
import { listMediaItemCards } from "../../services";

interface Props {
  mediaTypeId: string;
  resultsToShow: number;
  order: MediaTypeSort;
}

export async function MediaList({ mediaTypeId, resultsToShow, order }: Props) {
  const mediaItemCardsInfo: MediaItemCardInfo[] = await listMediaItemCards(
    mediaTypeId,
    resultsToShow,
    order,
  );

  if (!mediaItemCardsInfo.length) return <p>Sem itens na lista.</p>;

  return (
    <ul className={styles.mediaList}>
      {mediaItemCardsInfo.map((mediaItem) => (
        <MediaCard {...mediaItem} />
      ))}
    </ul>
  );
}
