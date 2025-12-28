"use client";

import Link from "next/link";
import styles from "./NewAnimeForm.module.css";
import {
  getFranchises,
  getSubcategories,
  getThemes,
} from "@/app/_lib/actions/global";
import { SubmitButton } from "../SubmitButton";
import { postAnime } from "@/app/_lib/actions/animes";

export async function NewAnimeForm() {
  const themes = await getThemes();
  const franchises = await getFranchises();
  const subcategories = await getSubcategories();

  return (
    <form className={styles.form} action={postAnime}>
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
        <label className={styles.formLabel} htmlFor="files">
          Imagens:
        </label>
        <input
          className={styles.formInput}
          id="images"
          name="images"
          type="file"
          multiple
        />
        <label className={styles.formLabel} htmlFor="files">
          Anexos:
        </label>
        <input
          className={styles.formInput}
          id="files"
          name="files"
          type="file"
          multiple
        />
      </fieldset>

      <fieldset className={styles.formFieldset}>
        <legend className={styles.formLegend}>Tags</legend>

        <label className={styles.formLabel} htmlFor="themes">
          Temáticas:
        </label>
        <div className={styles.checkboxGroup}>
          {themes.map(({ _id, title }) => (
            <div key={_id}>
              <input
                className={styles.formCheckbox}
                type="checkbox"
                id={_id}
                name="themesId"
                value={_id}
              />
              <label htmlFor={_id}>{title}</label>
            </div>
          ))}
          <Link href="/tematicas/novo">Adicionar</Link>
        </div>

        <label className={styles.formLabel} htmlFor="franchises">
          Franquias:
        </label>
        <div className={styles.checkboxGroup}>
          {franchises.map(({ _id, logo, title }) => (
            <div key={_id}>
              <input
                className={styles.formCheckbox}
                type="checkbox"
                id={_id}
                name="franchisesId"
                value={_id}
              />
              <label htmlFor={_id}>
                <img src={logo} alt={`Logotipo do título ${title}.`} />
              </label>
            </div>
          ))}
          <Link href="/franquias/novo">Adicionar</Link>
        </div>
      </fieldset>

      <fieldset className={styles.formFieldset}>
        <legend className={styles.formLegend}>Temporadas</legend>

        <label className={styles.formLabel} htmlFor="seasonNumber">
          Nº:
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

        <div className={styles.checkboxGroup}>
          <label className={styles.formLabel} htmlFor="seasonSubcategoryId">
            Subcategoria:
          </label>
          <select className={styles.formInput} id="seasonSubcategoryId">
            <option value="" hidden>
              Selecione...
            </option>
            {subcategories.map(({ _id, title }) => (
              <option key={_id} value={_id}>
                {title}
              </option>
            ))}
          </select>
          <Link href="/subcategorias/novo">Adicionar</Link>
        </div>

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
              name="seasonIsFinished"
              value="false"
              defaultChecked
            />
            Não
          </label>
        </div>
      </fieldset>
      <SubmitButton />
    </form>
  );
}
