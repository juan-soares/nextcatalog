import { InputHTMLAttributes } from "react";

export interface LanguageFormField extends InputHTMLAttributes<HTMLInputElement> {
  fieldId: string;
  fieldLabel: string;
}
