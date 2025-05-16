import { IEpisode, ISeason } from "@/app/_lib/interfaces";
import connectToDatabase from "../../connection";
import { populate } from "@/app/_lib/utils/tools/populate";

export async function getSeasons(recordIDToFind: string): Promise<ISeason[]> {
  const db = await connectToDatabase();

  const seasons: ISeason[] = db["seasons"].filter(
    ({ recordID }: { recordID: string }) => recordID === recordIDToFind
  );

  const seasonsPopulated = seasons.map((season) => ({
    ...season,
    episodes: populate.fields(season.episodes, "episodes"),
  }));

  return seasons;
}
