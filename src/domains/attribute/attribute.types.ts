import { HydratedDocument } from "mongoose";

export interface Attribute {
  label: string;
  key: string;
  slug: string;
}

export type AttributeDocument = HydratedDocument<Attribute>;

export interface AttributeDTO {
  id: string;
  label: string;
  key: string;
  slug: string;
}
