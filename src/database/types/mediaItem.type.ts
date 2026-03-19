import { Document, Types } from "mongoose";
import { MediaTypeDoc } from "./mediaType.type";

export interface MediaItemDoc extends Document {
  title: string;
  translatedTitle: string;
  slug: string;
  cover: string;
  releaseDate: Date;
  mediaTypeId: Types.ObjectId | MediaTypeDoc;
}
