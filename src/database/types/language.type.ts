import { MongoDoc } from "./database.type";

type LanguaCodeOptions = "JP" | "PT-BR" | "EN" | "ES";

export interface LanguageDoc extends MongoDoc {
  code: LanguaCodeOptions;
  title: string;
}
