import { mediaTypeRepository } from "@/database/repositories";
import { NavLink } from "./Navbar.type";
import { mediaTypesToNavLinks } from "./Navbar.mapper";

export async function listNavLinks(): Promise<NavLink[]> {
  const mediaTypes = await mediaTypeRepository.findAll({
    sortBy: "label",
    order: "asc",
  });

  return mediaTypesToNavLinks(mediaTypes);
}
