import { MediaTypeDoc } from "@/database/types";
import { NavLink } from "./Navbar.type";

export function mediaTypesToNavLinks(mediaTypes: MediaTypeDoc[]): NavLink[] {
  return mediaTypes.map(({ label, slug }) => ({
    label,
    href: `/${slug}`,
  }));
}
