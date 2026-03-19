import { Document } from "mongoose";

export interface LanguageDoc extends Document {
  code: string;
  title: string;
}
