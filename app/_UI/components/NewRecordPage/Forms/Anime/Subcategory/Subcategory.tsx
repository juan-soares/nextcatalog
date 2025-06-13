export function SubcategoryForm() {
  return (
    <fieldset>
      <legend>Temporada / OVA / Especial</legend>

      <label htmlFor="seasonSubcategory">Subcategoria:</label>
      <select name="seasonSubcategory" required>
        <option defaultValue="" hidden>
          Selecione...
        </option>
      </select>

      <label htmlFor="seasonNumber">Nº:</label>
      <input
        type="number"
        id="seasonNumber"
        name="seasonNumber"
        value={1}
        disabled
      />
      <label htmlFor="seasonRelease">Lançamento:</label>
      <input type="date" id="seasonRelease" name="seasonRelease" required />

      <label htmlFor="seasonTitle">Título:</label>
      <input type="text" id="seasonTitle" name="seasonTitle" required />

      <label htmlFor="seasonSynopsis">Sinopse:</label>
      <textarea required id="seasonSynopsis" name="seasonSynopsis" />

      <label htmlFor="seasonCover">Capa:</label>
      <input type="file" required id="seasonCover" name="seasonCover" />

      <label htmlFor="seasonLanguage">Idioma:</label>
      <select name="seasonLanguage" required>
        <option defaultValue="" hidden>
          Selecione...
        </option>
      </select>

      <label htmlFor="seasonResolution">Resolução:</label>
      <select name="seasonResolution" required>
        <option defaultValue="" hidden>
          Selecione...
        </option>
      </select>
    </fieldset>
  );
}
