import { NewAnimeForm } from "../NewAnimeForm";
import { NewSubcategoryForm } from "../NewSubcategory";

interface IProps {
  category: string;
}

export function CategoryForm({ category }: IProps) {
  switch (category) {
    case "animes":
      return <NewAnimeForm />;

    case "subcategorias":
      return <NewSubcategoryForm />;

    default:
      return null;
  }
}
