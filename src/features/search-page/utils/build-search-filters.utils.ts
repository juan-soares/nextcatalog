import { getMediaTypesAction } from "@/actions/media-type";
import { AsideFilter } from "../types";

export async function buildSearchFilters(): Promise<AsideFilter[]> {
  const mediaTypes = await getMediaTypesAction();

  return [
    {
      label: "Tipo",
      name: "mediaTypes",
      options: mediaTypes,
    },
  ];
}
