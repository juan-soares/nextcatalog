import { InputHTMLAttributes } from "react";

export interface PlatformFormField extends InputHTMLAttributes<HTMLInputElement> {
  fieldId: string;
  fieldLabel: string;
}
