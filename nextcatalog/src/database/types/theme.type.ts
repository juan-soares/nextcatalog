import { MongoDoc } from "./database.type";

export interface ThemeDoc extends MongoDoc {
  title: string;
  description: string;
}
