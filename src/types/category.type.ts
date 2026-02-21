import { Doc } from "./database.type";

export interface Category extends Doc {
  slug: string;
  title: string;
  description?: string;
}
