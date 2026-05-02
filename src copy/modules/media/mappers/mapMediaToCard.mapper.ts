import { Media, MediaCard } from "../types";

export function mapMediaToCard(media: Media): MediaCard {
  return {
    href: `/${media.category}/${media.slug}`,
    synopsis: media.synopsis,
    cover: media.cover,
    title: media.title,
    releaseYear: new Date(media.releaseDate).getFullYear().toString(),
  };
}
