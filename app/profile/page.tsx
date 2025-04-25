import { getAllCategories } from "../_lib/db/collections";

export default async function ProfilePage() {
  const categories = await getAllCategories();

  return (
    <main>
      <h1>Painel de Usuário</h1>
      <p>Selecione uma opção para adicionar um novo registro.</p>

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
