import mongoose, { Schema, Model } from "mongoose";
import { GenreDocument } from "@/domains/genre";

const GenreSchema = new Schema<GenreDocument>(
  {
    label: { type: String, required: true, unique: true },
  },
  { timestamps: true },
);

export const GenreModel: Model<GenreDocument> =
  mongoose.models.Genre ||
  mongoose.model<GenreDocument>("Genre", GenreSchema, "genres");
