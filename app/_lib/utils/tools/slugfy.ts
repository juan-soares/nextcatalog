export function slugfy(text: string): string {
  return (
    "/" +
    text
      .toString()
      .normalize("NFD") // Remove acentos
      .replace(/[\u0300-\u036f]/g, "") // Remove os caracteres de acento
      .toLowerCase() // Converte para minúsculas
      .trim() // Remove espaços no início/fim
      .replace(/\s+/g, "-") // Substitui espaços por hífens
      .replace(/[^\w\-]+/g, "") // Remove caracteres não alfanuméricos
      .replace(/\-\-+/g, "-")
  ); // Remove múltiplos hífens seguidos
}
