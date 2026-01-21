import { CategoryCollectionType } from "@/app/_data/data.types";
import { getTitle } from "@/app/_lib/actions/getTite";

export default async function CategoryTitlePage({
  params,
}: {
  params: Promise<{ category: string; title: string }>;
}) {
  const actualSeason = 1;

  const categorySlug = (await params).category;
  const categoryRecordSlug = (await params).title;
  const categoryTitle = await getTitle(
    categorySlug as CategoryCollectionType,
    categoryRecordSlug,
  );

  if (!categoryTitle) return;

  const { title, translatedTitle, seasons, releaseDate, themes, franchises } =
    categoryTitle;

  return (
    <div>
      <div>
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={seasons[actualSeason - 1].cover}
          aria-hidden="true"
        >
          <source src={seasons[actualSeason - 1].trailer} type="video/mp4" />
        </video>
        <h1>{title}</h1>
        <h2>{translatedTitle}</h2>
        <p>{seasons[actualSeason - 1].synopsis}</p>
        <strong>{releaseDate.toString().slice(0, 4)}</strong>
        <ul>
          {themes.map(({ _id, title }) => (
            <li key={_id}>{title}</li>
          ))}
        </ul>
        <ul>
          {franchises.map(({ _id, logo, title }) => (
            <li key={_id}>
              <img src={logo} alt={`Logotipo da franquia ${title}`} />
            </li>
          ))}
        </ul>
      </div>

      <div>
        <nav>
          <button>Temporadas</button>
          <button>OVA</button>
          <button>Extras</button>
        </nav>
      </div>

      <ul>
        {seasons.map(
          ({ _id, number, title, releaseDate, episodes, language }) => (
            <li key={_id}>
              <h3>{`Temporada ${number} - ${title && "Sem título."} (${releaseDate.toString().slice(0, 4)}) [${language}]`}</h3>

              <ul>
                {episodes.map(
                  ({
                    _id,
                    number: episodeNumber,
                    title: episodeTitle,
                    aquired,
                    finished,
                  }) => (
                    <li key={_id}>
                      <p>
                        {`${number} x ${episodeNumber} - ${episodeTitle}`}
                        <span>{aquired}</span>
                        <span>{finished}</span>
                      </p>
                    </li>
                  ),
                )}
              </ul>
            </li>
          ),
        )}
      </ul>
    </div>
  );
}
