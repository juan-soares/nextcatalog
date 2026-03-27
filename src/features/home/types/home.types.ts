import { MediaCardInfo } from "@/shared/components/layout/MediaCardList";

export interface HomeSectionInfo {
  mediaTypeId: string;
  title: string;
  href: string;
  mediasInfo: MediaCardInfo[];
}
