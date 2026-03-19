import { Schema, model, models } from "mongoose";
import { LanguageDoc } from "../types";

const languageSchema = new Schema<LanguageDoc>(
  {
    code: { type: String, required: true, unique: true },
    title: { type: String, required: true },
  },
  {
    timestamps: true,
  },
);

export const LanguageModel =
  models.Language ||
  model<LanguageDoc>("Language", languageSchema, "languages");
