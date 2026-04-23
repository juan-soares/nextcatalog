import { Schema, models, model } from "mongoose";

const MediaSchema = new Schema(
  {
    title: { type: String, required: true, index: true },
    translatedTitle: { type: String },
    slug: { type: String, required: true, unique: true, index: true },
    category: { type: String, required: true, index: true },
    releaseDate: { type: Date, index: true },
    cover: { type: String, required: true },
    trailer: { type: String },
    language: { type: String, required: true },
    gallery: { type: [String], default: [] },
    files: { type: Schema.Types.Mixed, default: {} },
    synopsis: { type: String },
    franchises: { type: [String], default: [], index: true },
    acquired: { type: Boolean, default: false, index: true },
    completed: { type: Boolean, default: false, index: true },
  },
  {
    timestamps: true,
  },
);

export const MediaModel = models.Media || model("Media", MediaSchema, "medias");
