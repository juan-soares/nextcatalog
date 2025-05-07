import { createTheme } from "@/app/_lib/db/collections";

export function ThemeForm() {
  return (
    <form action={createTheme}>
      <label htmlFor="title">Título:</label>
      <input type="text" id="title" name="title" required />

      <button>Enviar</button>
    </form>
  );
}
