import { Document, Types } from "mongoose";
import { MediaType } from "../mediaType/mediaType.types";

export interface MediaItem {
  id: string;
  title: string;
  translatedTitle: string;
  slug: string;
  cover: string;
  releaseDate: Date;

  mediaTypeId: string;
  mediaType?: MediaType;
}

export interface MediaItemDocument
  extends Omit<MediaItem, "id" | "mediaTypeId" | "mediaType">, Document {
  _id: Types.ObjectId;
  mediaTypeId: Types.ObjectId;
}
