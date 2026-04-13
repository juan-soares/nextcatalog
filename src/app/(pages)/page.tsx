import { mediaItem, MediaSection } from "@/domains/media-item";
import { HomePage } from "@/features/home";

export default async function Page() {
  const mediaSections: MediaSection[] = await mediaItem.getMediaSections();

  return <HomePage mediaSections={mediaSections} />;
}
