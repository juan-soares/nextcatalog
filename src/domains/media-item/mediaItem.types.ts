import { HydratedDocument } from "mongoose";

export interface MediaSection {
  id: string;
  title: string;
  mediaItems: MediaItem[];
}

export interface MediaItem {
  id: string;
  title: string;
  cover: string;
  synopsis: string;
  slug: string;
  releaseDate: Date;
}

export type MediaItemDocument = HydratedDocument<MediaItem>;
