import { MediaItem } from "@/domains/mediaItem";
import { MediaCard } from "../MediaCard";


interface Props {
  mediasInfo: MediaItem[];
}

export default function MediaCardList({ mediasInfo }: Props) {
  if (!mediasInfo.length)
    return (
      <div>
        <p>Sem registros.</p>
      </div>
    );

  return (
    <ul>
      {mediasInfo.map((mediaInfo) => (
        <MediaCard {...mediaInfo} />
      ))}
    </ul>
  );
}
