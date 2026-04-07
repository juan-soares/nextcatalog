import { submitMode } from "./ModeForm.actions";
import { modeFormFields } from "./ModeForm.const";
import { FormField } from "@/shared/components/ui";

export default function ModeForm() {
  return (
    <form action={submitMode}>
      <h1>Novo Modo</h1>
      {modeFormFields.map((fieldInfo) => (
        <FormField key={fieldInfo.fieldId} {...fieldInfo} />
      ))}

      <button type="submit">Enviar</button>
      <button type="reset">Limpar</button>
    </form>
  );
}
