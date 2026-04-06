import { ThemeDocument, ThemeDTO } from "@/domains/theme";

export const themeMappers = {
  toDTO({ _id, label }: ThemeDocument): ThemeDTO {
    return {
      id: _id.toString(),
      label,
    };
  },
};
