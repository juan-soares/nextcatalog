export async function FileForm() {
  return (
    <form>
      <label htmlFor="title">Título:</label>
      <input type="text" id="title" name="title" required />

      <label htmlFor="file">Arquivo:</label>
      <input type="file" id="file" name="file" required />

      <button>Enviar</button>
    </form>
  );
}
