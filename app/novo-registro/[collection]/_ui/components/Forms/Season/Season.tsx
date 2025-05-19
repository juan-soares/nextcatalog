export async function SeasonForm() {
  return (
    <form>
      <label htmlFor="release">Lançamento:</label>
      <input type="date" id="release" name="release" required />

      <label htmlFor="title">Número:</label>
      <input type="number" id="number" name="number" required min={1} />

      <label htmlFor="title">Título:</label>
      <input type="text" id="title" name="title" required />

      <button>Enviar</button>
    </form>
  );
}
