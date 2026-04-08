import { submitMode } from "./GenreForm.actions";
import { genreFormFields } from "./GenreForm.const";
import { FormField } from "@/shared/components/ui";

export default function GenreForm() {
  return (
    <form action={submitMode}>
      <h1>Novo Gênero</h1>
      {genreFormFields.map((fieldInfo) => (
        <FormField key={fieldInfo.fieldId} {...fieldInfo} />
      ))}

      <button type="submit">Enviar</button>
      <button type="reset">Limpar</button>
    </form>
  );
}
