import { categories } from "./temp.const";

export default function TempPage({
  searchParams,
}: {
  searchParams: { category?: string };
}) {
  const category = searchParams.category || null;

  if (!category) {
    return (
      <div>
        <form>
          {categories.length === 0 && <p>Sem categorias para exibir.</p>}
          {categories.length > 0 &&
            categories.map(({ _id, title, collection }) => (
              <div key={_id}>
                <input
                  type="checkbox"
                  id={_id}
                  name="category"
                  value={collection}
                />
                <label htmlFor={_id}>{title}</label>
              </div>
            ))}
          <button>Enviar</button>
        </form>
      </div>
    );
  }

  return (
    <div>
      <h1>{category}</h1>
    </div>
  );
}
