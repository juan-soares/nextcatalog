import { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  fieldId: string;
  fieldLabel: string;
}

export default function FormField({
  fieldId,
  fieldLabel,
  ...inputProps
}: Props) {
  return (
    <div>
      <label htmlFor={fieldId}>{fieldLabel}</label>
      <input id={fieldId} name={fieldId} {...inputProps} />
    </div>
  );
}
