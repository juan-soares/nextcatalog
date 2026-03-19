import { Schema, model, models } from "mongoose";
import { MediaTypeDoc } from "../types";

const MediaTypeSchema = new Schema<MediaTypeDoc>({
  label: { type: String, required: true },
  slug: { type: String, required: true },
});

export const MediaTypeModel =
  models.MediaType ||
  model<MediaTypeDoc>("MediaType", MediaTypeSchema, "mediaTypes");
