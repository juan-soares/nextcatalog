import { createFranchise } from "../_lib/actions";

export default function NovaFranquia() {
  return (
    <main>
      <h1>Nova Franquia</h1>
      <form action={createFranchise}>
        <label htmlFor="title">Título:</label>
        <input type="text" id="title" name="title" required />

        <label htmlFor="logo">Logo:</label>
        <input type="file" id="logo" name="logo" required />

        <button type="submit">Enviar</button>
      </form>
    </main>
  );
}
