import { Types } from "mongoose";

export interface MediaType {
  id: string;
  label: string;
  slug: string;
}

export interface MediaTypeDocument extends Omit<MediaType, "id">, Document {
  _id: Types.ObjectId;
}
