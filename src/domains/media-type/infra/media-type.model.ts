import mongoose, { Schema, model, models } from "mongoose";

const MediaTypeSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    slug: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },

    description: {
      type: String,
      default: null,
    },

    isActive: {
      type: Boolean,
      default: true,
      index: true,
    },

    filters: {
      type: [String],
      default: [],
    },

    sortOptions: {
      type: [String],
      default: ["recent", "alphabetical"],
    },
  },
  {
    timestamps: true,
  },
);

export const MediaTypeModel =
  models.MediaType || model("MediaType", MediaTypeSchema, "mediaTypes");
