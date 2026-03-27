import MediaCard from "../MediaCard/MediaCard";
import styles from "./MediaCardList.module.css";
import { MediaCardInfo } from "./MediaCardList.types";

interface Props {
  mediasInfo: MediaCardInfo[];
}

export default function MediaCardList({ mediasInfo }: Props) {
  if (!mediasInfo.length) {
    return <div className={styles.noResults}>Sem resultados.</div>;
  }
  return (
    <div className={styles.mediaCardList}>
      <ul>
        {mediasInfo.map((mediaInfo) => (
          <MediaCard {...mediaInfo} />
        ))}
      </ul>
    </div>
  );
}
