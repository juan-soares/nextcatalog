import { LanguageModel } from "../models";
import { LanguageDoc } from "../types";
import { createRepository } from "./";

export const languageRepository = createRepository<LanguageDoc>(LanguageModel);
