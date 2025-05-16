import { ISeason } from "@/app/_lib/interfaces";
import connectToDatabase from "../../connection";

export async function getSeasons(recordIDToFind: string): Promise<ISeason[]> {
  const db = await connectToDatabase();

  const seasons: ISeason[] = db["seasons"].filter(
    ({ recordID }: { recordID: string }) => recordID === recordIDToFind
  );

  console.log(seasons);

  return seasons;
}
