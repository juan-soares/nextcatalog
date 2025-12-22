import styles from "./NewAnimeForm.module.css";

export function NewAnimeForm() {
  return (
    <form className={styles.form}>
      <fieldset className={styles.formFieldset}>
        <legend className={styles.formLegend}>Ficha Técnica</legend>

        <label className={styles.formLabel} htmlFor="title">
          Título:
        </label>
        <input
          className={styles.formInput}
          id="title"
          name="title"
          type="text"
          required
        />

        <label className={styles.formLabel} htmlFor="translatedTitle">
          Título Traduzido:
        </label>
        <input
          className={styles.formInput}
          id="translatedTitle"
          name="translatedTitle"
          type="text"
        />

        <label className={styles.formLabel} htmlFor="releaseDate">
          Lançamento:
        </label>
        <input
          className={styles.formInput}
          id="releaseDate"
          name="releaseDate"
          type="date"
          required
        />

        <label className={styles.formLabel} htmlFor="synopses">
          Sinopse:
        </label>
        <textarea className={styles.formTextarea} id="synopses" required />
      </fieldset>

      <fieldset className={styles.formFieldset}>
        <legend className={styles.formLegend}>Arquivos</legend>
        <label className={styles.formLabel} htmlFor="cover">
          Capa:
        </label>
        <input
          className={styles.formInput}
          id="cover"
          name="cover"
          type="file"
          required
        />

        <label className={styles.formLabel} htmlFor="trailer">
          Trailer:
        </label>
        <input
          className={styles.formInput}
          id="trailer"
          name="trailer"
          type="file"
          required
        />
      </fieldset>

      <fieldset className={styles.formFieldset}>
        <legend className={styles.formLegend}>Tags</legend>
        <label className={styles.formLabel} htmlFor="themes">
          Temáticas:
        </label>
        <div className={styles.checkboxGroup}>
          <div>
            <input
              className={styles.formCheckbox}
              type="checkbox"
              id="theme1"
              name="themes"
              value="1"
            />
            <label htmlFor="theme1">Tema 1</label>
          </div>
          <div>
            <input
              className={styles.formCheckbox}
              type="checkbox"
              id="theme2"
              name="themes"
              value="2"
            />
            <label htmlFor="theme2">Tema 2</label>
          </div>
        </div>
      </fieldset>

      <fieldset className={styles.formFieldset}>
        <legend className={styles.formLegend}>Temporadas</legend>
        <label className={styles.formLabel} htmlFor="seasonNumber">
          N
        </label>
        <input
          className={styles.formInput}
          type="number"
          id="seasonNumber"
          value={1}
          disabled
        />

        <label className={styles.formLabel} htmlFor="seasonTitle">
          Título:
        </label>
        <input
          className={styles.formInput}
          type="text"
          id="seasonTitle"
          required
        />

        <label className={styles.formLabel} htmlFor="seasonTranslatedTitle">
          Título Traduzido:
        </label>
        <input
          className={styles.formInput}
          type="text"
          id="seasonTranslatedTitle"
        />

        <label className={styles.formLabel} htmlFor="seasonReleaseDate">
          Lançamento:
        </label>
        <input
          className={styles.formInput}
          id="seasonReleaseDate"
          name="seasonReleaseDate"
          type="date"
          required
        />

        <label className={styles.formLabel}>Adquirido:</label>
        <div className={styles.radioGroup}>
          <label>
            <input
              className={styles.formRadio}
              type="radio"
              name="seasonIsAquired"
              value="true"
            />
            Sim
          </label>
          <label>
            <input
              className={styles.formRadio}
              type="radio"
              name="seasonIsAquired"
              value="false"
              defaultChecked
            />
            Não
          </label>
        </div>

        <label className={styles.formLabel}>Completo:</label>
        <div className={styles.radioGroup}>
          <label>
            <input
              className={styles.formRadio}
              type="radio"
              name="seasonIsCompleted"
              value="true"
            />
            Sim
          </label>
          <label>
            <input
              className={styles.formRadio}
              type="radio"
              name="seasonIsCompleted"
              value="false"
              defaultChecked
            />
            Não
          </label>
        </div>
      </fieldset>

      <button className={styles.formButton}>Enviar</button>
    </form>
  );
}
