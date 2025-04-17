import { ISeason } from "@/app/_lib/interfaces";

export function Seasons() {
  const seasons: ISeason[] = [
    {
      id: "aa",
      number: 1,
      title: "Shippuden",
      release: "2024-01-01",
      episodes: [
        {
          id: "aa",
          number: 1,
          title: "Guerreiros Secretos.",
          aquired: false,
          complete: true,
        },
      ],
    },
  ];

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
