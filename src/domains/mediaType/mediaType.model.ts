import { Schema, Document, Model, model, models } from "mongoose";
import { MediaTypeDocument } from "./mediaType.types";

const MediaTypeSchema = new Schema<MediaTypeDocument>(
  {
    label: { type: String, required: true },
    slug: { type: String, required: true },
  },
  { timestamps: true },
);

export const MediaTypeModel: Model<MediaTypeDocument> =
  models.MediaType ||
  model<MediaTypeDocument>("MediaType", MediaTypeSchema, "mediaTypes");
