import { LanguageDocument } from "../types/language.types";
import { LanguageEntity } from "../domain/language.entity";

export const languageMapper = {
  toLanguageEntity(languageDoc: LanguageDocument): LanguageEntity {
    return {
      id: languageDoc._id.toString(),
      label: languageDoc.label,
    };
  },
};
