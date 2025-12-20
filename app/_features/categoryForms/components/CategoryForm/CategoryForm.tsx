import { NewAnimeForm } from "../NewAnimeForm";

interface IProps {
  category: string;
}

export function CategoryForm({ category }: IProps) {
  switch (category) {
    case "animes": return <NewAnimeForm />;
      break;

    default: return null
      break;
  }
}
