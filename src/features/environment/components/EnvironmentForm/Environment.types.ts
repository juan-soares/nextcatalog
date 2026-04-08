import { InputHTMLAttributes } from "react";

export interface EnvironmentFormField extends InputHTMLAttributes<HTMLInputElement> {
  fieldId: string;
  fieldLabel: string;
}
