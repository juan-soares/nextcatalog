import { Schema, model, models } from "mongoose";
import { FranchiseDoc } from "../types";

const franchiseSchema = new Schema<FranchiseDoc>(
  {
    title: { type: String, required: true },
    translatedTitle: { type: String },
    slug: { type: String, required: true, unique: true },
    logo: { type: String, required: true },
    parentFranchiseId: { type: Schema.Types.ObjectId, ref: "Franchise" },
  },
  {
    timestamps: true,
  },
);

export const FranchiseModel =
  models.Franchise ||
  model<FranchiseDoc>("Franchise", franchiseSchema, "franchises");
