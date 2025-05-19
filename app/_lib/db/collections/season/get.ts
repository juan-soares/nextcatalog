import { IEpisode, ISeason, ISeasonWithEpisodes } from "@/app/_lib/interfaces";
import connectToDatabase from "../../connection";
import { populate } from "@/app/_lib/utils/tools/populate";

export async function getSeasonsWithEpisodes(
  recordIDToFind: string
): Promise<ISeasonWithEpisodes[]> {
  const db = await connectToDatabase();

  const seasons: ISeason[] = db["seasons"].filter(
    ({ recordID }: { recordID: string }) => recordID === recordIDToFind
  );
  const seasonsWithEpisodesPopulated = await Promise.all(
    seasons.map(async (season) => {
      const episodesPopulated: IEpisode[] = await populate.fields(
        season.episodes,
        "episodes"
      );

      return { ...season, episodes: episodesPopulated };
    })
  );

  console.log(seasonsWithEpisodesPopulated);

  return seasonsWithEpisodesPopulated;
}
