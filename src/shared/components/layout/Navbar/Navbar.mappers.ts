import { MediaType } from "@/domains/media-type";
import { NavLink } from "@/shared/components/layout/Navbar/Navbar.types";

export const navbarMapper = {
  toLink({ label, slug }: MediaType): NavLink {
    return {
      label,
      href: `/${slug}`,
    };
  },
};
