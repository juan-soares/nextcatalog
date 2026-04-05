import mongoose, { Schema, Model } from "mongoose";
import { ResolutionDocument } from "@/domains/resolution";

const ResolutionSchema = new Schema<ResolutionDocument>(
  {
    label: { type: String, required: true, unique: true },
    code: { type: String, required: true, unique: true },
  },
  { timestamps: true },
);

export const ResolutionModel: Model<ResolutionDocument> =
  mongoose.models.Resolution ||
  mongoose.model<ResolutionDocument>("Resolution", ResolutionSchema, "resolutions");
