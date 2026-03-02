import { FranchiseDoc, LanguageDoc, ThemeDoc } from "./";

export interface Database {
  franchises: FranchiseDoc[];
  languages: LanguageDoc[];
  themes: ThemeDoc[];
}

export interface MongoDoc {
  _id: string;
  createdAt: Date;
  updatedAt: Date;
}
