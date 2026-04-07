import mongoose, { Schema, Model } from "mongoose";
import { PlatformDocument } from "@/domains/platform";

const PlatformSchema = new Schema<PlatformDocument>(
  {
    label: { type: String, required: true, unique: true },
    code: { type: String, required: true, unique: true },
  },
  { timestamps: true },
);

export const PlatformModel: Model<PlatformDocument> =
  mongoose.models.Platform ||
  mongoose.model<PlatformDocument>("Platform", PlatformSchema, "platforms");
