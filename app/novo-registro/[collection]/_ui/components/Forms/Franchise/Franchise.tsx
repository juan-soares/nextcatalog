import { createFranchise } from "@/app/_lib/db/collections";

export function FranchiseForm() {
  return (
    <form action={createFranchise}>
      <label htmlFor="title">Título:</label>
      <input type="text" id="title" name="title" required />

      <label htmlFor="logo">Logo:</label>
      <input type="file" id="logo" name="logo" required />

      <button>Enviar</button>
    </form>
  );
}
