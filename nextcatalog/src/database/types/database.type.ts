import { LanguageDoc, ThemeDoc } from "./";

export interface Database {
  languages: LanguageDoc[];
  themes: ThemeDoc[];
}

export interface MongoDoc {
  _id: string;
  createdAt: Date;
  updatedAt: Date;
}
