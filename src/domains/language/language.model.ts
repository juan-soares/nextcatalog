import mongoose, { Schema, Model } from "mongoose";
import { LanguageDocument } from "@/domains/language";

const LanguageSchema = new Schema<LanguageDocument>(
  {
    label: { type: String, required: true, unique: true },
  },
  { timestamps: true },
);

export const LanguageModel: Model<LanguageDocument> =
  mongoose.models.Language ||
  mongoose.model<LanguageDocument>("Language", LanguageSchema, "languages");
