import { HydratedDocument } from "mongoose";

export interface Language {
  label: string;
}

export type LanguageDocument = HydratedDocument<Language>;

export interface LanguageDTO {
  id: string;
  label: string;
}
