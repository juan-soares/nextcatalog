import { Schema, Model, model, models } from "mongoose";
import { MediaItemDocument } from "./mediaItem.types";

const MediaItemSchema = new Schema<MediaItemDocument>(
  {
    title: { type: String, required: true, index: true },
    translatedTitle: { type: String, required: true },
    slug: { type: String, required: true },
    cover: { type: String, required: true },
    releaseDate: { type: Date, required: true },

    mediaTypeId: {
      type: Schema.Types.ObjectId,
      ref: "MediaType",
      required: true,
    },
  },
  { timestamps: true },
);

export const MediaItemModel: Model<MediaItemDocument> =
  models.MediaItem ||
  model<MediaItemDocument>("MediaItem", MediaItemSchema, "mediaItems");
