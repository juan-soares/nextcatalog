import { PlatformFormField } from "./PlatformForm.types";

export const platformFormFields: PlatformFormField[] = [
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
    required: true,
  },
];
