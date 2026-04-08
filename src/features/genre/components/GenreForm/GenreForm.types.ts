import { InputHTMLAttributes } from "react";

export interface GenreFormField extends InputHTMLAttributes<HTMLInputElement> {
  fieldId: string;
  fieldLabel: string;
}
