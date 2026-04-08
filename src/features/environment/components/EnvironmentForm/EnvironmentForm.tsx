import { submitEnvironment } from "./Environment.actions";
import { environmentFormFields } from "./EnvironmentForm.const";
import { FormField } from "@/shared/components/ui";

export default function Form() {
  return (
    <form action={submitEnvironment}>
      <h1>Nova Ambientação</h1>
      {environmentFormFields.map((fieldInfo) => (
        <FormField key={fieldInfo.fieldId} {...fieldInfo} />
      ))}

      <button type="submit">Enviar</button>
      <button type="reset">Limpar</button>
    </form>
  );
}
