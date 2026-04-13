import { MediaItem } from "@/domains/media-item";
import { MediaCardList } from "@/features/mediaItem";

interface Props {
  title: string;
  mediaItems: MediaItem[];
}

export default function HomeSection({ title, mediaItems }: Props) {
  return (
    <section>
      <h1>{title}</h1>
      <div>
        {mediaItems.map((mediaItem) => (
          <MediaCardList key={mediaItem.id} mediasInfo={mediaItem} />
        ))}
      </div>
    </section>
  );
}
