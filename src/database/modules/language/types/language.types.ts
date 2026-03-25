import { Types } from "mongoose";

export type LanguageDocument = {
  _id: Types.ObjectId;
  label: string;
  createdAt: Date;
  updatedAt: Date;
};

export type LanguageFilter = {
  label?: string;
};
