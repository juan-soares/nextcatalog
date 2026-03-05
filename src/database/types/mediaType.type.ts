import { MongoDoc } from "./database.type";

export interface MediaTypeDoc extends MongoDoc {
  label: string;
  slug: string;
}
