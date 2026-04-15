import { MediaTypeLink } from "../types";
import { MediaType } from "@/domains/media-type/entity";

export function toMediaTypeLink(mediaType: MediaType): MediaTypeLink {
  return {
    id: mediaType.id,
    label: mediaType.title,
    href: `/${mediaType.slug}`,
  };
}
