import { Schema, model } from "mongoose";
import { ThemeDoc } from "../types";

const themeSchema = new Schema<ThemeDoc>(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
  },
  {
    timestamps: true,
  },
);

export const ThemeModel = model<ThemeDoc>("Theme", themeSchema, "themes");
