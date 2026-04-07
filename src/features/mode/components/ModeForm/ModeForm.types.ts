import { InputHTMLAttributes } from "react";

export interface ModeFormField extends InputHTMLAttributes<HTMLInputElement> {
  fieldId: string;
  fieldLabel: string;
}
