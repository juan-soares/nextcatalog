import mongoose, { Schema, Model } from "mongoose";
import { AttributeDocument } from "./attribute.types";

const AttributeSchema = new Schema<AttributeDocument>(
  {
    label: { type: String, required: true, unique: true },
    key: { type: String, required: true, unique: true },
    slug: { type: String, required: true, unique: true },
  },
  { timestamps: true },
);

export const AttributeModel: Model<AttributeDocument> =
  mongoose.models.Attribute ||
  mongoose.model<AttributeDocument>("Attribute", AttributeSchema, "attributes");
