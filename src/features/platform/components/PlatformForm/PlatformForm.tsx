import { submitPlatform } from "./PlatformForm.actions";
import { platformFormFields } from "./PlatformForm.const";
import { FormField } from "@/shared/components/ui";

export default function LanguageForm() {
  return (
    <form action={submitPlatform}>
      <h1>Nova Plataforma</h1>
      {platformFormFields.map((fieldInfo) => (
        <FormField key={fieldInfo.fieldId} {...fieldInfo} />
      ))}

      <button type="submit">Enviar</button>
      <button type="reset">Limpar</button>
    </form>
  );
}
