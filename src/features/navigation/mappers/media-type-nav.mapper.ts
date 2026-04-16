import { MediaType } from "@/domains/media-type";

interface MediaLink {
  id: string;
  label: string;
  href: string;
}

export function mediaTypeToNavLink(mediaType: MediaType): MediaLink {
  return {
    id: mediaType.id,
    label: mediaType.label,
    href: `/${mediaType.slug}`,
  };
}
