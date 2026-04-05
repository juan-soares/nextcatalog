import { languageFormFields } from "./LanguageForm.const";
import { FormField } from "@/shared/components/ui";

export default function LanguageForm() {
  return (
    <form>
      <h1>Novo Idioma</h1>
      {languageFormFields.map((fieldInfo) => (
        <FormField key={fieldInfo.fieldId} {...fieldInfo} />
      ))}

      <button type="submit">Enviar</button>
      <button type="reset">Limpar</button>
    </form>
  );
}
