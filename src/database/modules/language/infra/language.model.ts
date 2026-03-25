import { Schema, model, models } from "mongoose";
import { LanguageDocument } from "../types/language.types";

const languageSchema = new Schema<LanguageDocument>(
  {
    label: { type: String, required: true },
  },
  { timestamps: true },
);

export const LanguageModel =
  models.Language || model("Language", languageSchema, "languages");
