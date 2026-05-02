import { Media, MediaCard } from "../types";

export function toMediaCard({
  cover,
  slug,
  title,
  releaseDate,
}: Media): MediaCard {
  return {
    cover,
    href: `/${slug}`,
    title,
    releaseYear: new Date(releaseDate).getFullYear().toString(),
  };
}
