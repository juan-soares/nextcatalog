import { LanguageFormField } from "./LanguageForm.types";

export const languageFormFields: LanguageFormField[] = [
  {
    fieldId: "label",
    fieldLabel: "Valor",
    type: "text",
    required: true,
  },
  {
    fieldId: "code",
    fieldLabel: "Código",
    type: "text",
    required: false,
  },
];
