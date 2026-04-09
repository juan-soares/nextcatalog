import { MediaItem } from "@/domains/mediaItem";

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
          <MediaCard key={mediaItem.id} mediaInfo={mediaItem} />
        ))}
      </div>
    </section>
  );
}
