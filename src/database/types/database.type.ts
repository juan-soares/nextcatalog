import { FranchiseDoc, LanguageDoc, MediaTypeDoc, ThemeDoc } from "./";

export interface Database {
  franchises: FranchiseDoc[];
  languages: LanguageDoc[];
  themes: ThemeDoc[];

  mediaTypes: MediaTypeDoc[];
}

export interface MongoDoc {
  _id: string;
  createdAt: Date;
  updatedAt: Date;
}
