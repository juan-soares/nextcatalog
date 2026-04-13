import { MediaSection } from "@/domains/media-item";
import { HomeSection } from "../HomeSection";

interface Props {
  mediaSections: MediaSection[];
}

export default function HomePage({ mediaSections }: Props) {
  return (
    <div>
      {mediaSections.map(({ id, title, mediaItems }) => (
        <HomeSection key={id} title={title} mediaItems={mediaItems} />
      ))}
    </div>
  );
}
