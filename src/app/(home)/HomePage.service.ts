import { listAllMediaTypes } from "@/domains/mediaType";
import { NavLink } from "@/shared/types";

export async function getMediaLinks(): Promise<NavLink[]> {
  const mediaTypes = await listAllMediaTypes();

  return mediaTypes.map(({ label, slug }) => ({
    label,
    href: `/${slug}`,
  }));
}
