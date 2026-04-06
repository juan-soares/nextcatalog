import { submitTheme } from "./ThemeForm.actions";
import { themeFormFields } from "./ThemeForm.const";
import { FormField } from "@/shared/components/ui";

export default function ThemeForm() {
  return (
    <form action={submitTheme}>
      <h1>Novo Tema</h1>
      {themeFormFields.map((fieldInfo) => (
        <FormField key={fieldInfo.fieldId} {...fieldInfo} />
      ))}

      <button type="submit">Enviar</button>
      <button type="reset">Limpar</button>
    </form>
  );
}
