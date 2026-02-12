import { Doc } from "./database";
import { Season } from "./season";

export interface MediaItemCard extends Doc {
  title: string;
  synopsis: string;
  cover: string;
  releaseYear: string;
  slug: string;
}

export interface MediaItem extends Omit<MediaItemCard, "releaseYear"> {
  translatedTitle?: string;
  galleryId?: string;
  releaseDate: string;
  fileIds?: string[];
  trailer?: string;
  franchiseId?: string;
  seasons?: Season[];
  platform?: string[];
  gameType?: string;
  genre?: string[];
  modes?: string[];
  movement?: string[];
  acquired?: boolean;
}
