import { Types } from "mongoose";

export interface MediaItemdDocument {
  _id: Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;

  title: string;
  translatedTitle: string;
  slug: string;
  cover: string;
  releaseDate: Date;
}


