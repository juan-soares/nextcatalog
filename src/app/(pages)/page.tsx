import { mediaItem, MediaSection } from "@/domains/mediaItem";
import { HomePage } from "@/features/home";

export default async function Page() {
  const mediaSections: MediaSection[] = await mediaItem.getMediaSections();

  return <HomePage mediaSections={mediaSections} />;
}
