
import { getCategoriesBySlug } from "@/app/_lib/db";
import { FormFieldsByCategory } from "./components";


interface IProps {
  params: Promise<{ category: string }>;
}

export default async function NovoRegistroPage({ params }: IProps) {
  const { category } = await params;

  if(category === "franquias") return (<FormFieldsByCategory category="franquias"/>)

  const categoryInfo = await getCategoriesBySlug(category);

  return (
    <main>
      <h1>Adicionar novo registro em {categoryInfo.title}</h1>
      <form>
        <fieldset>
          <legend>Ficha Técnica</legend>
          <label htmlFor="title">Título</label>
          <input type="text" id="title" name="title" required />

          <label htmlFor="translatedTitle">Título Traduzido</label>
          <input type="text" id="translatedTitle" name="translatedTitle" />

          <label htmlFor="subcategory">Subcategoria</label>
          <select id="subcategory" name="subcategory" required>
            <option value="" hidden>
              Selecione...
            </option>
            <option>1</option>
          </select>

          <label htmlFor="release">Data de Lançamento</label>
          <input type="date" id="release" name="release" required />

          <label htmlFor="synopsis">Sinopse</label>
          <textarea id="synopsis" name="synopsis" required />

          <label htmlFor="cover">Capa</label>
          <input type="file" id="cover" name="cover" required />

          <label htmlFor="trailer">Trailer</label>
          <input type="file" id="trailer" name="trailer" required />
        </fieldset>

        <fieldset>
          <legend>Sequências</legend>
          <label htmlFor="directSequel">Sequência Direta</label>
          <select id="directSequel" name="directSequel">
            <option hidden>Selecione...</option>
            <option>1</option>
          </select>

          <label htmlFor="chronologicalSequel">Sequência Cronológica</label>
          <select id="chronologicalSequel" name="chronologicalSequel">
            <option hidden>Selecione...</option>
            <option>1</option>
          </select>

          <label htmlFor="arc">Arco</label>
          <select id="arc" name="arc">
            <option hidden>Selecione...</option>
            <option>1</option>
          </select>
        </fieldset>

        <fieldset>
          <legend>Tags</legend>
          <label>Temáticas</label>
          <input type="checkbox" id="theme1" name="themes" required />
          <label htmlFor="theme1">Temática 1</label>

          <label htmlFor="franchises">Franquias</label>
          <select id="franchises" name="franchises" required>
            <option value="" hidden>
              Selecione...
            </option>
            <option>1</option>
          </select>
        </fieldset>

        <fieldset>
          <legend>Anexos</legend>
          <label htmlFor="images">Imagens</label>
          <input type="file" id="images" multiple name="images" />

          <label htmlFor="files">Arquivos</label>
          <input type="file" id="files" multiple name="files" />
        </fieldset>

        <fieldset>
          <legend>Status</legend>
          <label>Adquirido</label>
          <input type="radio" id="yes" name="aquired" />
          <label htmlFor="yes">Sim</label>
          <input type="radio" id="no" name="aquired" defaultChecked />
          <label htmlFor="no">Não</label>

          <label>Finalizado</label>
          <input type="radio" id="yes" name="complete" />
          <label htmlFor="yes">Sim</label>
          <input type="radio" id="no" name="complete" defaultChecked />
          <label htmlFor="no">Não</label>
        </fieldset>

        <FormFieldsByCategory category={category} />

        <button type="submit">Enviar</button>
      </form>
    </main>
  );
}
