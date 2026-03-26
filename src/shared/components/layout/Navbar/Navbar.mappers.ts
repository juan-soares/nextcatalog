import { MediaType } from "@/domains/mediaType";
import { NavLink } from "@/shared/components/layout/Navbar/Navbar.types";

export const navbarMapper = {
  toLink({ label, slug }: MediaType): NavLink {
    return {
      label,
      href: `/${slug}`,
    };
  },
};
