import { getCategoriesBySlug } from "@/app/_lib/db";

interface IProps {
  params: Promise<{ category: string }>;
}

export default async function NovoRegistroPage({ params }: IProps) {
  const { category } = await params;
  const categoryInfo = await getCategoriesBySlug(category);

  return (
    <main>
      <h1>Adicionar novo registro em {categoryInfo.title}</h1>
      <form>
        <label htmlFor="title">Título</label>
        <input type="text" id="title" name="title" required />

        <label htmlFor="translatedTitle">Título Traduzido</label>
        <input type="text" id="translatedTitle" name="translatedTitle" />

        <label htmlFor="release">Data de Lançamento</label>
        <input type="date" id="release" name="release" required />

        <label htmlFor="synopsis">Sinopse</label>
        <textarea id="synopsis" name="synopsis" required />

        <label htmlFor="cover">Capa</label>
        <input type="file" id="cover" name="cover" required />

        <label htmlFor="trailer">Trailer</label>
        <input type="file" id="trailer" name="trailer" required />

        <label htmlFor="directSequel">Sequencia Direta</label>
        <select id="directSequel" name="directSequel">
          <option hidden>Selecione...</option>
          <option>1</option>
        </select>

        <label htmlFor="chronologicSequel">Sequencia Cronológica</label>
        <select id="chronologicSequel" name="chronologicSequel">
          <option hidden>Selecione...</option>
          <option>1</option>
        </select>

        <label>Temáticas</label>
        <input type="checkbox" id="theme1" name="themes" value="" />
        <label htmlFor="theme1">Temática 1</label>

        <label htmlFor="franchises">Franquias</label>
        <select id="franchises" name="franchises" required>
          <option hidden>Selecione...</option>
          <option>1</option>
        </select>

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

        <button type="submit">Enviar</button>
      </form>
    </main>
  );
}
