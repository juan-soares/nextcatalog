export function SeasonsFormFields() {
  return (
    <fieldset>
      <legend>Temporadas</legend>
      <label htmlFor="season-number">Número</label>
      <input type="number" id="season-number" name="season-number" required />

      <label htmlFor="season-title">Título</label>
      <input type="text" id="season-title" name="season-title" />

      <label htmlFor="season-release">Lançamento</label>
      <input type="date" id="season-release" name="season-release" required />

      <fieldset>
        <legend>Episódios</legend>
        <label htmlFor="episode-number">Número</label>
        <input
          type="number"
          id="episode-number"
          name="episode-number"
          required
        />

        <label htmlFor="episode-title">Título</label>
        <input type="text" id="episode-title" name="episode-title" />

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
    </fieldset>
  );
}
