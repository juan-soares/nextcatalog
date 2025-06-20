import { ITheme } from "@/app/_lib/database/database.interface";
import { SubcategoryForm } from "./Subcategory";

export function AnimeForm() {
  const themes: ITheme[] = [];

  return (
    <form>
      <h1>Adicionar A</h1>

      <fieldset>
        <legend>Ficha Técnica</legend>
        <label htmlFor="title">Título:</label>
        <input type="text" required id="title" name="title" />

        <label htmlFor="translatedTitle">Título Traduzido:</label>
        <input
          type="text"
          required
          id="translatedTitle"
          name="translatedTitle"
        />

        <label htmlFor="release">Lançamento:</label>
        <input type="date" required id="release" name="release" />

        <label htmlFor="synopsis">Sinopse:</label>
        <textarea required id="synopsis" name="synopsis" />
      </fieldset>

      <fieldset>
        <legend>Cronologia</legend>
        <label htmlFor="directSequel">Sequencia Direta:</label>
        <select id="directSequel" name="directSequel">
          <option defaultValue="" hidden>
            Selecione...
          </option>
        </select>

        <label htmlFor="chronologicalSequel">Sequencia Cronológica:</label>
        <select id="chronologicalSequel" name="chronologicalSequel">
          <option defaultValue="" hidden>
            Selecione...
          </option>
        </select>
      </fieldset>

      <fieldset>
        <legend>Arquivos</legend>
        <label htmlFor="cover">Capa:</label>
        <input type="file" required id="cover" name="cover" />

        <label htmlFor="trailer">Trailer:</label>
        <input type="file" required id="trailer" name="trailer" />

        <label htmlFor="images">Imagens:</label>
        <input type="file" multiple id="images" name="images" />

        <label htmlFor="attachments">Anexos:</label>
        <input type="file" multiple id="attachments" name="attachments" />
      </fieldset>

      <fieldset>
        <legend>Tags</legend>
        <label htmlFor="franchise">Franquia</label>
        <select id="franchise" name="franchise">
          <option defaultValue="" hidden>
            Selecione...
          </option>
        </select>

        <label htmlFor="themes">Temáticas</label>
        <ul>
          {themes.map(({ id, title }) => (
            <li key={id}>
              <label htmlFor={id}>{title}</label>
              <input type="checkbox" id={id} name="themes" value={id} />
            </li>
          ))}
        </ul>
      </fieldset>

      <SubcategoryForm />

      <button>Enviar</button>
    </form>
  );
}
