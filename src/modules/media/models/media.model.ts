import { Schema, models, model } from "mongoose";

const MediaSchema = new Schema(
  {
    title: { type: String, required: true },
    translatedTitle: { type: String },
    slug: { type: String, required: true, unique: true, index: true },
    category: { type: String, required: true },
    cover: { type: String, required: true },
    trailer: { type: String },
    language: { type: String },
    synopsis: { type: String },
    genres: [{ type: String }],
    franchise: { type: String },
    acquired: { type: Boolean, default: false },
    completed: { type: Boolean, default: false },
    releaseDate: { type: Date },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  },
  {
    timestamps: true,
  },
);

export const MediaModel = models.Media || model("Media", MediaSchema, "medias");
