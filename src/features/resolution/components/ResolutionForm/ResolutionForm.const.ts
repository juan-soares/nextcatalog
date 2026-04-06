import { ResolutionFormField } from "./ResolutionForm.types";

export const resolutionFormFields: ResolutionFormField[] = [
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
