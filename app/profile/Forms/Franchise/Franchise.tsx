import Link from "next/link";

export function FranchiseForm() {
  return (
    <form>
      <h1>Nova Franquia</h1>
      <label htmlFor="title">Título</label>
      <input type="text" id="title" name="title" required />

      <label htmlFor="collection">Coleção</label>
      <input type="text" id="collection" name="title" required />

      <label htmlFor="logo">Logotipo</label>
      <input type="file" id="logo" name="logo" required />

      <button type="submit">Salvar</button>
      <Link href="/profile">Voltar</Link>
    </form>
  );
}
