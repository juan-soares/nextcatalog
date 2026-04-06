import { InputHTMLAttributes } from "react";

export interface ThemeFormField extends InputHTMLAttributes<HTMLInputElement> {
  fieldId: string;
  fieldLabel: string;
}
