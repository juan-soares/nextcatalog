import { Category, Franchise, MediaItem } from ".";

export interface Database {
  categories: Category[];
  franchises: Franchise[];
  mediaItems: MediaItem[];
}

export interface Doc {
  _id: string;
  createdAt: string;
  lastUpdateAt: string;
}
