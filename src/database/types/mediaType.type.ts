import { Document } from "mongoose";

export interface MediaTypeDoc extends Document {
  label: string;
  slug: string;
}
