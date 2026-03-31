import { NewAnimeForm } from "../NewAnimeForm";

interface Props {
  mediaType: "Animes";
}

export default function NewRecordForm({ mediaType }: Props) {
  switch (mediaType) {
    case "Animes":
      return <NewAnimeForm />;

    default:
      <div>Tipo de mídia não encontrada.</div>;
      break;
  }
}
