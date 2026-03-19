import { Document, Types } from "mongoose";

export interface FranchiseDoc extends Document {
  title: string;
  translatedTitle?: string;
  slug: string;
  logo: string;
  parentFranchiseId?: Types.ObjectId | FranchiseDoc;
}
