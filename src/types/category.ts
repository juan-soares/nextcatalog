import { Doc } from "./database";

export interface Category extends Doc {
  slug: string;
  label: string;
  description?: string;
}
