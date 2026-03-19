import { Document } from "mongoose";

export interface ThemeDoc extends Document {
  title: string;
  description: string;
}