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
        <input id="releaseDate" name="releaseDate" type="date" required />

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
        <label htmlFor="themes">Temáticas:</label>

        <input type="checkbox" id="theme1" name="themes" value="1" />
        <label htmlFor="theme1">Tema 1</label>
        <input type="checkbox" id="theme2" name="themes" value="2" />
        <label htmlFor="theme2">Tema 2</label>
      </fieldset>

      <fieldset>
        <legend>Temporadas</legend>
        <label htmlFor="seasonNumber">N</label>
        <input type="number" id="seasonNumber" value={1} disabled />
        <label htmlFor="seasonTitle">Título:</label>
        <input type="text" id="seasonTitle" required />
        <label htmlFor="seasonTranslatedTitle">Título Traduzido:</label>
        <input type="text" id="seasonTranslatedTitle" />
        <label htmlFor="seasonReleaseDate">Lançamento:</label>
        <input
          id="seasonReleaseDate"
          name="seasonReleaseDate"
          type="date"
          required
        />
        <label htmlFor="seasonIsAquired">Adquirido:</label>
        <input
          type="radio"
          name="seasonIsAquired"
          id="seasonIsAquiredTrue"
          required
        />
        <label htmlFor="seasonIsAquiredTrue">Sim</label>
        <input
          type="radio"
          name="seasonIsAquired"
          id="seasonIsAquiredFalse"
          value="true"
        />
        <label htmlFor="seasonIsAquiredFalse">Não</label>

        <label htmlFor="seasonIsCompleted">Completo:</label>
        <input
          type="radio"
          name="seasonIsCompleted"
          id="seasonIsCompletedTrue"
          value="true"
          required
        />
        <label htmlFor="seasonIsCompletedTrue">Sim</label>

        <input
          type="radio"
          name="seasonIsCompleted"
          id="seasonIsCompletedFalse"
          value="false"
        />
        <label htmlFor="seasonIsCompletedFalse">Não</label>
      </fieldset>

      <button>Enviar</button>
    </form>
  );
}
