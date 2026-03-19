import styles from "./MediaList.module.css";
import { MediaItemCardInfo } from "../../type";
import { MediaCard } from "../MediaCard";

interface Props {
  mediaItemsList: MediaItemCardInfo[];
}

export function MediaList({ mediaItemsList }: Props) {
  if (!mediaItemsList.length) return <p>Sem itens na lista.</p>;

  return (
    <ul className={styles.mediaList}>
      {mediaItemsList.map((mediaItem) => (
        <MediaCard {...mediaItem} />
      ))}
    </ul>
  );
}
