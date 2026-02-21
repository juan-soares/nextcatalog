import { CategoryDoc } from "@/src/types";
import { Doc } from "./database.type";
import { Season } from "./season";

export interface MediaItemCard extends Doc {
  title: string;
  synopsis: string;
  cover: string;
  releaseYear: string;
  slug: string;
}

export interface MediaItemDoc extends Omit<MediaItemCard, "releaseYear"> {
  categoryId: CategoryDoc["_id"];
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
