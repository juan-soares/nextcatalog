import mongoose, { Schema, Model } from "mongoose";
import { ThemeDocument } from "@/domains/theme";

const ThemeSchema = new Schema<ThemeDocument>(
  {
    label: { type: String, required: true, unique: true },
  },
  { timestamps: true },
);

export const ThemeModel: Model<ThemeDocument> =
  mongoose.models.Theme ||
  mongoose.model<ThemeDocument>("Theme", ThemeSchema, "themes");
