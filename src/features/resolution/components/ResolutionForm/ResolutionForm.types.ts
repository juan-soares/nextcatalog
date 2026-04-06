import { InputHTMLAttributes } from "react";

export interface ResolutionFormField extends InputHTMLAttributes<HTMLInputElement> {
  fieldId: string;
  fieldLabel: string;
}
