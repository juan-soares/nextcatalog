import { Doc } from "./database";

export interface Category extends Doc {
  slug: string;
  title: string;
  description?: string;
}
