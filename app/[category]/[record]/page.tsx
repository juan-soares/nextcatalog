import {
  getCompleteRecordInfoByRecordSlug,
  getSeasonsWithEpisodes,
} from "@/app/_lib/db/collections";
import {
  ICategoryRecordPopulated,
  ISeasonWithEpisodes,
} from "@/app/_lib/interfaces";
import Link from "next/link";

export interface IProps {
  params: Promise<{ category: string; record: string }>;
}

export default async function RecordPage({ params }: IProps) {
  const { category: categorySlug, record: recordSlug } = await params;
  const recordInfo: ICategoryRecordPopulated =
    await getCompleteRecordInfoByRecordSlug(categorySlug, recordSlug);

  const {
    id,
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

  const seasons: ISeasonWithEpisodes[] = await getSeasonsWithEpisodes(id);

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
                <figure>
                  <img
                    src={logo}
                    alt={`Logotipo da franquia ${title}.`}
                    height={60}
                    width={100}
                  />
                </figure>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {subcategory.title === "Temporada" && (
        <section>
          <h2>Temporadas</h2>
          <Link href="/novo-registro/temporada">
            <button>+</button>
          </Link>
          {seasons.map(
            ({ id, number: seasonNumber, title, release, episodes }) => (
              <li key={id}>
                <h3>{`(${release.slice(
                  0,
                  4
                )}) ${seasonNumber}º Temporada: ${title}`}</h3>
                <Link href="/novo-registro/episodio">
                  <button>+</button>
                </Link>

                <ul>
                  {episodes.map(
                    ({
                      id,
                      number: episodeNumber,
                      title,
                      complete,
                      aquired,
                    }) => (
                      <li key={id}>
                        {`${seasonNumber}x${episodeNumber}: ${title}`}{" "}
                        <input type="checkbox" readOnly checked={aquired} />
                        <input type="checkbox" readOnly checked={complete} />
                      </li>
                    )
                  )}
                </ul>
              </li>
            )
          )}
        </section>
      )}
    </main>
  );
}
