import { Schema, model } from "mongoose";
import { languageRepository } from "./language.repository";

const languageSchema = new Schema(
  {
    code: { type: String, required: true },
    label: { type: String, required: true },
  },
  {
    timestamps: true,
  },
);

export const LanguageModel = model("Language", languageSchema, "languages");
