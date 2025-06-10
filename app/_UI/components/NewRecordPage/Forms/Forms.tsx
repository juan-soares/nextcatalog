import { CategoriesTitleMap } from "@/app/_lib/database/database.interface";
import { AnimeForm } from "./";

export async function Forms({
  categoryCollection,
}: {
  categoryCollection: CategoriesTitleMap;
}) {
  switch (categoryCollection) {
    case "animes":
      return <AnimeForm />;

    default:
      return <p>Ops! Algo deu errado.</p>;
  }
}
