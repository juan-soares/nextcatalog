import mongoose, { Schema, Model } from "mongoose";
import { MediaItemDocument } from "@/domains/media-item";

const MediaItemSchema = new Schema<MediaItemDocument>(
  {
    title: { type: String, required: true, unique: true },
    cover: { type: String, required: true, unique: true },
    synopsis: { type: String, required: true },
    slug: { type: String, required: true },
    releaseDate: { type:Date, required: true}

  },
  { timestamps: true },
);

export const MediaItemModel: Model<MediaItemDocument> =
  mongoose.models.MediaItem ||
  mongoose.model<MediaItemDocument>("MediaItem", MediaItemSchema, "mediaItems");
