import { Schema, model, Types } from "mongoose";
import { MediaItemDoc } from "../types";

const mediaItemSchema = new Schema<MediaItemDoc>(
  {
    title: { type: String, required: true },
    translatedTitle: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    cover: { type: String },
    releaseDate: { type: Date },
    mediaTypeId: { type: Types.ObjectId, ref: "MediaType", required: true },
  },
  {
    timestamps: true,
  },
);

export const MediaItemModel = model<MediaItemDoc>(
  "MediaItem",
  mediaItemSchema,
  "mediaItems",
);
