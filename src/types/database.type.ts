import { CategoryDoc, FranchiseDoc, MediaItemDoc } from ".";

export interface Database {
  categories: CategoryDoc[];
  franchises: FranchiseDoc[];
  mediaItems: MediaItemDoc[];
}

export interface Doc {
  _id: string;
  createdAt: string;
  lastUpdateAt: string;
}
