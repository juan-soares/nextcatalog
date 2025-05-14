import { getCompleteRecordInfoByRecordSlug } from "@/app/_lib/db/collections";
import Link from "next/link";

export interface IProps {
  params: Promise<{ category: string; record: string }>;
}

export default async function RecordPage({ params }: IProps) {
  const { category: categorySlug, record: recordSlug } = await params;
  const recordInfo = await getCompleteRecordInfoByRecordSlug(
    categorySlug,
    recordSlug
  );
  const {
    title,
    translatedTitle,
    release,
    synopsis,
    subcategory,
    directSequel,
    chronologicalSequel,
    themes,
    franchises,
  } = recordInfo;

  return (
    <main>
      <header>
        <video controls />
        <h1>
          {title} {translatedTitle && <em>{` (${translatedTitle})`}</em>}
        </h1>
        <p>
          <time dateTime={release}>{release.slice(0, 4)}</time>
        </p>
        <span>{subcategory.title}</span>
        <p>{synopsis}</p>
      </header>

      <section>
        <h2>Ficha Técnica</h2>
        <dl>
          <dt>Título:</dt>
          <dd>{title}</dd>

          <dt>Título Traduzido:</dt>
          <dd>{translatedTitle}</dd>

          <dt>Lançamento:</dt>
          <dd>{release}</dd>
        </dl>
      </section>

      <section>
        <h2>Cronologia</h2>
        <dl>
          <dt>Sequência Direta:</dt>
          {directSequel && (
            <dd>
              <figure>
                <Link href={directSequel.slug}>
                  <img
                    src={directSequel.cover}
                    alt={`Capa do título ${directSequel.title}`}
                    width={80}
                    height={90}
                  />
                  <figcaption>
                    {`${directSequel.title} (${directSequel.release.slice(
                      0,
                      4
                    )})`}
                  </figcaption>
                </Link>
              </figure>
            </dd>
          )}
        </dl>

        <dl>
          <dt>Sequência Cronológica:</dt>
          {chronologicalSequel && (
            <dd>
              <figure>
                <Link href={chronologicalSequel.slug}>
                  <img
                    src={chronologicalSequel.cover}
                    alt={`Capa do título ${chronologicalSequel.title}`}
                    width={80}
                    height={90}
                  />
                  <figcaption>
                    {`${
                      chronologicalSequel.title
                    } (${chronologicalSequel.release.slice(0, 4)})`}
                  </figcaption>
                </Link>
              </figure>
            </dd>
          )}
        </dl>
      </section>

      <dl>
        <dd>
          {directSequel && (
            <Link href={directSequel.slug}>
              <img
                src={directSequel.cover}
                alt={`Capa do título ${directSequel.title}.`}
                width={80}
                height={90}
              />
              <h2>{directSequel.title}</h2>
              <span>{`(${directSequel.release.slice(0, 4)})`}</span>
            </Link>
          )}
        </dd>

        <dt>Sequência Cronológica:</dt>
        <dd>
          {chronologicalSequel && (
            <Link href={chronologicalSequel.slug}>
              <img
                src={chronologicalSequel.cover}
                alt={`Capa do título ${chronologicalSequel.title}.`}
                width={80}
                height={90}
              />
              <h2>{chronologicalSequel.title}</h2>
              <span>{`(${chronologicalSequel.release.slice(0, 4)})`}</span>
            </Link>
          )}
        </dd>
      </dl>

      <section>
        <h2>Temáticas</h2>
        <ul>
          {themes.map(({ id, title }) => (
            <li key={id}>{title}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Franquias</h2>
        <ul>
          {franchises.map(({ id, title, slug, logo }) => (
            <li key={id}>
              <Link href={slug}>
                <img
                  src={logo}
                  alt={`Logotipo da franquia ${title}.`}
                  height={60}
                  width={100}
                />
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
