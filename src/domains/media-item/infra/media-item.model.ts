import mongoose from "mongoose";
import { MediaItem } from "../domain";

const MediaItemSchema = new mongoose.Schema<Omit<MediaItem, "id">>(
  {
    title: { type: String, required: true },
    translatedTitle: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    cover: { type: String, required: true },
    releaseDate: { type: Date, required: true },
  },
  {
    timestamps: true,
  },
);

export const MediaItemModel =
  mongoose.models.MediaItem ||
  mongoose.model("MediaItem", MediaItemSchema, "mediaItems");
