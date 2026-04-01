import { LanguageDocument, LanguageDTO } from "@/domains/language";

export const languageMappers = {
  toDTO({ _id, label }: LanguageDocument): LanguageDTO {
    return {
      id: _id.toString(),
      label,
    };
  },
};
