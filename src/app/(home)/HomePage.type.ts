import { MediaItemCardInfo } from "@/features/mediaItemList/type";

export interface IMediaSection {
  title: string;
  href: string;
  mediaItemCardsInfo: MediaItemCardInfo[];
}
