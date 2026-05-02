import { Schema, models, model } from "mongoose";

const MediaSchema = new Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true },
    releaseDate: { type: Date, required: true },

    cover: { type: String, required: true },
  },
  {
    timestamps: true,
  },
);

export const MediaModel = models.Media || model("Media", MediaSchema, "medias");
