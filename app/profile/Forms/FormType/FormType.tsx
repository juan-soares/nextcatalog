import { getAllCategories } from "@/app/_lib/db/collections";

export async function FormType() {
  const categories = await getAllCategories();

  return (
    <main>
      <h1>Painel de Usuário</h1>
      <h2>Novo Registro</h2>

      <form>
        <ul>
          {categories.map(({ id, collection, title }) => (
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
