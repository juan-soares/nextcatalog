import { submitResolution } from "./ResolutionForm.actions";
import { resolutionFormFields } from "./ResolutionForm.const";
import { FormField } from "@/shared/components/ui";

export default function ResolutionForm() {
  return (
    <form action={submitResolution}>
      <h1>Nova Resolução</h1>
      {resolutionFormFields.map((fieldInfo) => (
        <FormField key={fieldInfo.fieldId} {...fieldInfo} />
      ))}

      <button type="submit">Enviar</button>
      <button type="reset">Limpar</button>
    </form>
  );
}
