import { Fragment } from "react";
import { getAllFranchises } from "@/app/_lib/db/collections";
import { getSubcategoriesByCategoryCollection } from "@/app/_lib/db/collections";
import { createAnime } from "@/app/_lib/db/collections/anime";
import Link from "next/link";

export async function AnimeForm() {
  const franchisesOption = await getAllFranchises();
  const subcategoriesOption = await getSubcategoriesByCategoryCollection(
    "animes"
  );

  return (
    <form action={createAnime}>
      <fieldset>
        <legend>Ficha Técnica</legend>
        <label htmlFor="title">Título:</label>
        <input type="text" id="title" name="title" required />

        <label htmlFor="translatedTitle">Título Traduzido:</label>
        <input type="text" id="translatedTitle" name="translatedTitle" />

        <label htmlFor="release">Lançamento:</label>
        <input type="date" id="release" name="release" required />

        <label htmlFor="subcategory">Subcategoria: </label>
        <select id="subcategory" name="subcategory" required>
          <option hidden value="">
            Selecione...
          </option>
          {subcategoriesOption.map(({ id, title }) => (
            <option key={id} value={id}>
              {title}
            </option>
          ))}
        </select>
        <Link href="/novo-registro/subcategorias">
          <button type="button">+</button>
        </Link>
      </fieldset>

      <fieldset>
        <legend>Mídia</legend>
        <label htmlFor="logo">Logo:</label>
        <input type="file" id="logo" name="logo" required />
      </fieldset>

      <fieldset>
        <legend>Cronologia</legend>
        <label htmlFor="directSequel">Sequência Direta:</label>
        <select id="directSequel" name="directSequel">
          <option hidden value="">
            Selecione...
          </option>
        </select>

        <label htmlFor="chronologicalSequel">Sequência Cronológica:</label>
        <select id="chronologicalSequel" name="chronologicalSequel">
          <option hidden value="">
            Selecione...
          </option>
        </select>
      </fieldset>

      <fieldset>
        <legend>Tags</legend>
        <label>Temáticas</label>
        <input
          type="checkbox"
          id="tematica1"
          name="themes"
          value="tematica1"
          required
        />
        <label htmlFor="tematica1">Temática 1</label>

        <label>Franquias</label>
        {franchisesOption.map(({ id, title }) => (
          <Fragment key={id}>
            <input
              type="checkbox"
              id={id}
              name="franchises"
              value={id}
              required
            />
            <label htmlFor="franquia">{title}</label>
          </Fragment>
        ))}
      </fieldset>

      <button>Enviar</button>
    </form>
  );
}
