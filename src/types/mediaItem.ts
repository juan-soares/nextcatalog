import { Season } from "./season";

export interface MediaItem {
  _id: string;
  categoryId: string;
  title: string;
  translatedTitle?: string;
  synopsis?: string;
  cover?: string;
  galleryId?: string;
  fileIds?: string[];
  trailer?: string;
  franchiseId?: string;
  seasons?: Season[];
  platform?: string[];
  gameType?: string;
  genre?: string[];
  modes?: string[];
  movement?: string[];
  releaseDate?: string;
  acquired?: boolean;
}
