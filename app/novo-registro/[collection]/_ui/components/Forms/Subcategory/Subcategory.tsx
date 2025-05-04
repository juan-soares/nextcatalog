import { getCategories } from "@/app/_lib/db/collections";
import { createSubcategory } from "@/app/_lib/db/collections/subcategory";
import { Fragment } from "react";

export async function SubcategoryForm() {
  const categories = await getCategories();

  return (
    <form action={createSubcategory}>
      <label htmlFor="title">Título:</label>
      <input type="text" id="title" name="title" required />

      <label htmlFor="categories">Categorias:</label>
      {categories.map(({ id, title }) => (
        <Fragment key={id}>
          <input
            type="checkbox"
            id={id}
            name="categories"
            value={id}
            required
          />
          <label htmlFor={id}>{title}</label>
        </Fragment>
      ))}

      <button>Enviar</button>
    </form>
  );
}
