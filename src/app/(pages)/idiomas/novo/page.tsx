export default function Page() {
  return (
    <main>
      <h1>Novo Idioma</h1>
      <form>
        <label htmlFor="title">Valor</label>
        <input id="title" name="title" type="text" required />
        <button>Enviar</button>
      </form>
    </main>
  );
}
