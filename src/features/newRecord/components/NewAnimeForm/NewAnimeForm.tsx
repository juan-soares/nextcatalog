import Link from "next/link";

export default function NewAnimeForm() {
  return (
    <form>
      <fieldset>
        <legend>Ficha Técnica</legend>
        <label htmlFor="title">Titulo</label>
        <input id="title" name="title" required />
        <label htmlFor="translatedTitle">Titulo Traduzido</label>
        <input id="translatedTitle" name="translatedTitle" />
        <label htmlFor="releaseDate">Lançamento</label>
        <input id="releaseDate" type="date" name="releaseDate" required />

        <div>
          <label htmlFor="language">Idioma</label>
          <Link href="/idiomas/novo">
            <button>+</button>
          </Link>

          <select id="language" name="language" required>
            <option value="" hidden>
              Selecione...
            </option>
          </select>
        </div>
        <label htmlFor="synopsis">Sinopse</label>
        <textarea id="synopsis" name="synopsis" required />
      </fieldset>

      <fieldset>
        <legend>Mídia</legend>
        <label htmlFor="cover">Capa</label>
        <input id="cover" type="file" name="cover" required />
        <label htmlFor="trailer">Trailer</label>
        <input id="trailer" type="file" name="trailer" required />
        <label htmlFor="gallery">Imagens</label>
        <input id="gallery" type="file" name="gallery" multiple required />
        <label htmlFor="files">Arquivos</label>
        <input id="files" type="file" name="files" multiple />
      </fieldset>

      <fieldset>
        <legend>Sequência</legend>
        <label htmlFor="beforeSequel">Anterior</label>
        <select id="beforeSequel" name="beforeSequel">
          <option value="" hidden>
            Selecione...
          </option>
        </select>
        <label htmlFor="afterSequel">Posterior</label>
        <select id="afterSequel" name="afterSequel">
          <option value="" hidden>
            Selecione...
          </option>
        </select>
      </fieldset>

      <fieldset>
        <legend>Tags</legend>
        <div>
          <label htmlFor="theme">Temática</label>
          <Link href="/tema/novo">
            <button>+</button>
          </Link>
          <select id="theme" name="theme">
            <option value="" hidden>
              Selecione...
            </option>
          </select>
        </div>
        <div>
          <label>Franquias</label>
          <Link href="/franquia/novo">
            <button>+</button>
          </Link>
          <input id="f1" type="checkbox" name="franchises" required />
          <label htmlFor="f1">1</label>
        </div>
      </fieldset>

      <button>Enviar</button>
    </form>
  );
}
