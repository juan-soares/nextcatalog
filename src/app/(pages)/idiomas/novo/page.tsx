"use client";

const handleSubmit = async (e) => {
  e.preventDefault();
  await fetch("/api/idiomas");
};

export default function Page() {
  return (
    <main>
      <h1>Novo Idioma</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="title">Valor</label>
        <input id="title" name="title" type="text" required />
        <button>Enviar</button>
      </form>
    </main>
  );
}
