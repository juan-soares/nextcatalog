import mongoose, { Schema, Model } from "mongoose";
import { ModeDocument } from "@/domains/mode";

const ModeSchema = new Schema<ModeDocument>(
  {
    label: { type: String, required: true, unique: true },
  },
  { timestamps: true },
);

export const ModeModel: Model<ModeDocument> =
  mongoose.models.Mode ||
  mongoose.model<ModeDocument>("Mode", ModeSchema, "modes");
