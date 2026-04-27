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
    themes: [{ type: String }],
    franchisesId: [{ type: String, required: true }],
    acquired: { type: Boolean, default: false },
    completed: { type: Boolean, default: false },
    releaseDate: { type: Date },
    details: {
      type: Schema.Types.Mixed,
      default: {},
    },
  },
  {
    timestamps: true,
  },
);

export const MediaModel = models.Media || model("Media", MediaSchema, "medias");
