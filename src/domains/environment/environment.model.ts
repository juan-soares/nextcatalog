import mongoose, { Schema, Model } from "mongoose";
import { EnvironmentDocument } from "@/domains/environment";

const EnvironmentSchema = new Schema<EnvironmentDocument>(
  {
    label: { type: String, required: true, unique: true },
  },
  { timestamps: true },
);

export const EnvironmentModel: Model<EnvironmentDocument> =
  mongoose.models.Environment ||
  mongoose.model<EnvironmentDocument>(
    "Environment",
    EnvironmentSchema,
    "environments",
  );
