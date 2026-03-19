import styles from "./MediaList.module.css";

import { MediaCard } from "../MediaCard";
import { MediaItemCardInfo } from "../../type";

interface Props {
  mediaItemCardsInfo: MediaItemCardInfo[];
}

export function MediaList({ mediaItemCardsInfo }: Props) {
  if (!mediaItemCardsInfo.length) return <p>Sem itens na lista.</p>;

  return (
    <ul className={styles.mediaList}>
      {mediaItemCardsInfo.map((mediaItem) => (
        <MediaCard {...mediaItem} />
      ))}
    </ul>
  );
}
