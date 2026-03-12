import {
  FranchiseDoc,
  LanguageDoc,
  MediaItemDoc,
  MediaTypeDoc,
  ThemeDoc,
} from "./";

export interface Database {
  franchises: FranchiseDoc[];
  languages: LanguageDoc[];
  themes: ThemeDoc[];

  mediaTypes: MediaTypeDoc[];
  mediaItems: MediaItemDoc[];
}

export interface MongoDoc {
  _id: string;
  createdAt: Date;
  updatedAt: Date;
}

export type CollectionRef<T extends MongoDoc> = T["_id"] | T;
