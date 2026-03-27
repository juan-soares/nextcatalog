import { mediaTypeServices } from "@/domains/mediaType";
import { NavLink } from "./Navbar.types";
import { navbarMapper } from "./Navbar.mappers";

export async function listLinks(): Promise<NavLink[]> {
  const mediaTypes = await mediaTypeServices.listAllMediaTypes();
  return mediaTypes.map(navbarMapper.toLink);
}
