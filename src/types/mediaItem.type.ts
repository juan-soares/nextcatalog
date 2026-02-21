import { CategoryDoc, FranchiseDoc, FranchisePopulated } from "@/src/types";
import { Doc } from "./database.type";
import { Season } from "./season";

export interface MediaItemDoc extends Doc {
  title: string;
  categoryId: CategoryDoc["_id"];
  translatedTitle?: string;
  slug: string;
  cover: string;
  synopsis: string;
  //galleryId?: string[];
  releaseDate: string;
  //filesId?: string[];
  trailer?: string;
  franchiseId: FranchiseDoc["_id"];
  seasons?: Season[];
  platform?: string[];
  gameType?: string;
  genre?: string[];
  modes?: string[];
  movement?: string[];
  acquired?: boolean;
}

type mediaItemDocFieldsToOmit = "categoryId" | "franchiseId";

export interface MediaItemPopulated extends Omit<
  MediaItemDoc,
  mediaItemDocFieldsToOmit
> {
  category: CategoryDoc;
  franchise: FranchisePopulated;
}

export interface MediaItemCard extends Omit<MediaItemPopulated, "releaseDate"> {
  releaseYear: string;
}
