import { getFormTypes } from "@/app/_lib/db/collections";
import { IFormType } from "@/app/_lib/interfaces/formType";

export async function FormType() {
  const formTypes: IFormType[] = await getFormTypes();

  return (
    <main>
      <h1>Painel de Usuário</h1>
      <h2>Novo Registro</h2>

      <form>
        <ul>
          {formTypes.map(({ id, collection, title }) => (
            <li key={id}>
              <input
                type="radio"
                name="formtype"
                id={collection}
                value={collection}
                required
              />
              <label htmlFor={collection}>{title}</label>
            </li>
          ))}
        </ul>
        <button type="submit">Avançar</button>
      </form>
    </main>
  );
}
