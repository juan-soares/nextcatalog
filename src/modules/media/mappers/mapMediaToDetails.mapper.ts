import { mapFranchiseToLink } from "@/modules/franchise/mappers";
import { Media, MediaDetails } from "../types";

export function mapMediaToDetails(media: Media): MediaDetails {
  return {
    title: media.title,
    translatedTitle: media.translatedtitle,
    cover: media.cover,
    trailer: media.trailer,
    synopsis: media.synopsis,
    franchises: media.franchises.map(mapFranchiseToLink),
    acquired: media.acquired,
    complete: media.complete,
    releaseYear: new Date(media.releaseDate).getFullYear().toString(),
    themes: media.themes,
  };
}
