import { getRecordByRecordSlug } from "@/app/_lib/db/collections";

export interface IProps {
  params: Promise<{ category: string; record: string }>;
}

export default async function RecordPage({ params }: IProps) {
  const { category: categorySlug, record: recordSlug } = await params;
  const recordInfo = await getRecordByRecordSlug(categorySlug, recordSlug);
  const { title, translatedTitle, release, synopsis } = recordInfo;

  return (
    <main>
      <header>
        <video controls />
        <h1>
          {title} {translatedTitle && <em>{` (${translatedTitle})`}</em>}
        </h1>
        <h2>{release.slice(0, 4)}</h2>
        <p>{synopsis}</p>
      </header>

      <dl>
        <dt>Título:</dt>
        <dd>{title}</dd>

        <dt>Título Traduzido:</dt>
        <dd>{translatedTitle}</dd>

        <dt>Lançamento:</dt>
        <dd>{release}</dd>
      </dl>
    </main>
  );
}
