export function NewAnimeForm() {
  return (
    <form>
      <fieldset>
        <legend>Ficha Técnica</legend>
        <label htmlFor="title">Título:</label>
        <input id="title" name="title" type="text" required />
        <label htmlFor="translatedTitle">Título Traduzido:</label>
        <input id="translatedTitle" name="translatedTitle" type="text" />
        <label htmlFor="releaseDate">Lançamento:</label>
        <input id="releaseDate" name="releaseDate" type="date" />

        <label htmlFor="synopses">Sinopse:</label>
        <textarea id="synopses" required />
      </fieldset>

      <fieldset>
        <legend>Arquivos</legend>
        <label htmlFor="cover">Capa:</label>
        <input id="cover" name="cover" type="file" required />

        <label htmlFor="trailer">Trailer:</label>
        <input id="trailer" name="trailer" type="file" required />
      </fieldset>

      <fieldset>
        <legend>Tags</legend>
        <label htmlFor="genres">Gêneros:</label>

        <input type="checkbox" id="genero1" name="genres" value="1" />
        <label htmlFor="genero1">Genero 1</label>
        <input type="checkbox" id="genero2" name="genres" value="2" />
        <label htmlFor="genero2">Genero 2</label>
      </fieldset>

      <button>Enviar</button>
    </form>
  );
}
