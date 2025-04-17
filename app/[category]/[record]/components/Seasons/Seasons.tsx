import { getSeasonsByTitle } from "@/app/_lib/db/seasons";

interface IProps {
  titleID: string;
}

export async function Seasons({ titleID }: IProps) {
  const seasons = await getSeasonsByTitle(titleID);

  return (
    <section>
      {seasons.map(({ id, number: seasonNumber, title, release, episodes }) => (
        <div key={id}>
          <h3>{`(${release.slice(0, 4)}) Temporada ${seasonNumber} ${
            title && `- ${title}`
          }`}</h3>

          <h4>Episódios</h4>
          <ul>
            {episodes.map(
              ({ id, number: episodeNumber, title, aquired, complete }) => (
                <li key={id}>
                  <p>{`${seasonNumber}x${episodeNumber} - ${title}`}</p>
                  {aquired && <span>Adquirido</span>}
                  {complete && <span>Completo</span>}
                </li>
              )
            )}
          </ul>
        </div>
      ))}
    </section>
  );
}
