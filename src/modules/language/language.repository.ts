import { HydratedDocument } from "mongoose";
import { Language } from "./language.type";
import { LanguageModel } from "./language.model";

export type LanguageDoc = HydratedDocument<Language>;

export const languageRepository = {
  async findAll(): Promise<LanguageDoc[]> {
    return LanguageModel.find().sort({ createdAt: -1 });
  },
};
