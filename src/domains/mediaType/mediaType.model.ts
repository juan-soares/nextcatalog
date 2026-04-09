import mongoose, { Schema, Model } from "mongoose";
import { MediaTypeDocument } from "@/domains/mediaType";

const MediaTypeSchema = new Schema<MediaTypeDocument>(
  {
    label: { type: String, required: true, unique: true },
    slug: { type: String, required: false, unique: true },
  },
  { timestamps: true },
);

export const MediaTypeModel: Model<MediaTypeDocument> =
  mongoose.models.MediaType ||
  mongoose.model<MediaTypeDocument>("MediaType", MediaTypeSchema, "mediaTypes");
