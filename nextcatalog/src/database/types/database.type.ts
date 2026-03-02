import { LanguageDoc } from "./language.type";

export interface Database {
  languages: LanguageDoc[];
}

export interface MongoDoc {
  _id: string;
  createdAt: Date;
  updatedAt: Date;
}
