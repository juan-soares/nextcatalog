import { CheckCheckIcon, Cross } from "lucide-react";

interface Props {
  title: string;
  translatedTitle?: string;
  releaseDate: string;
  acquired: boolean;
  complete: boolean;
}

export default function MediaTabInfo({
  title,
  translatedTitle,
  releaseDate,
  acquired,
  complete,
}: Props) {
  return (
    <section>
      <h3>Informações</h3>

      <dl>
        <dt>Título</dt>
        <dd>{title}</dd>

        {translatedTitle && (
          <>
            <dt>Título Traduzido</dt>
            <dd>{translatedTitle}</dd>
          </>
        )}

        <dt>Lançamento</dt>
        <dd>{releaseDate}</dd>

        <dt>Adquirido</dt>
        <dd>{acquired ? <CheckCheckIcon /> : <Cross />}</dd>
        <dt>Completo</dt>
        <dd>{complete ? <CheckCheckIcon /> : <Cross />}</dd>
      </dl>
    </section>
  );
}
