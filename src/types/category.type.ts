import { Doc } from "./database.type";
import { MediaItemCard } from "./mediaItem.type";

export interface CategoryDoc extends Doc {
  slug: string;
  title: string;
  description?: string;
}

export interface CategoryWithMediaCards extends CategoryDoc {
  mediaItemCards: MediaItemCard[];
}
