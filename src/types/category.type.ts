import { Doc } from "./database.type";

export interface CategoryDoc extends Doc {
  slug: string;
  title: string;
  description?: string;
}
