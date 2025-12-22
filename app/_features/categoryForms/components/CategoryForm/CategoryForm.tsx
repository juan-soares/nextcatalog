import { NewAnimeForm } from "../NewAnimeForm";

interface IProps {
  category: string;
}

export function CategoryForm({ category }: IProps) {
  switch (category) {
    case "animes":
      return <NewAnimeForm />;

    default:
      return null;
  }
}
