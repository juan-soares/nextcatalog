import { mediaTypeServices } from "@/domains/media-type";
import { NavLink } from "./Navbar.types";
import { navbarMapper } from "./Navbar.mappers";

export async function listLinks(): Promise<NavLink[]> {
  const mediaTypes = await mediaTypeServices.listAll();
  return mediaTypes.map(navbarMapper.toLink);
}
