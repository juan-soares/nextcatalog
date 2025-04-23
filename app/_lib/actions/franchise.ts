"use server";

function slugify(text: string) {
  const url = text
    .toString() // Garante que é string
    .normalize("NFD") // Separa acentos das letras
    .replace(/[\u0300-\u036f]/g, "") // Remove os acentos
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "") // Remove caracteres especiais
    .replace(/[\s_-]+/g, "-") // Substitui espaço e underscore por hífen
    .replace(/^-+|-+$/g, ""); // Remove traços no início/fim

  return `/${url}`;
}

export async function createFranchise(formData: FormData) {
  const formValues = {
    title: "",
    logo: "",
    slug: slugify(""),
  };

}
