import { NewAnimeForm, NewSubcategoryForm, NewThemeForm } from "../";

interface IProps {
  category: string;
}

export function CategoryForm({ category }: IProps) {
  switch (category) {
    case "animes":
      return <NewAnimeForm />;

    case "subcategorias":
      return <NewSubcategoryForm />;

    case "tematicas":
      return <NewThemeForm />;

    default:
      return null;
  }
}
