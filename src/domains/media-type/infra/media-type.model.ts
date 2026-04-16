import mongoose from "mongoose";
import { MediaType } from "../domain";

const MediaTypeSchema = new mongoose.Schema<Omit<MediaType, "id">>({
  label: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
});

export const MediaTypeModel =
  mongoose.models.MediaType ||
  mongoose.model("MediaType", MediaTypeSchema, "mediaTypes");
