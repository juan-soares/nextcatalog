import { MediaItem } from "@/domains/mediaItem";

export interface HomeSectionInfo {
  mediaTypeId: string;
  title: string;
  href: string;
  medias: MediaItem[];
}
