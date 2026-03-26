import { listAllMediaTypes } from "@/domains/mediaType";
import { NavLink } from "./Navbar.types";
import { navbarMapper } from "./Navbar.mappers";

export async function listLinks(): Promise<NavLink[]> {
  const mediaTypes = await listAllMediaTypes();
  return mediaTypes.map(navbarMapper.toLink);
}
