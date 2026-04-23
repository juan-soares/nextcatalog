import { Franchise, FranchiseLink } from "../types";

export function mapFranchiseToLink(franchise: Franchise): FranchiseLink {
  return {
    id: franchise.id,
    logo: franchise.logo,
    label: franchise.label,
    href: `/franquias/{franchise.slug}`,
  };
}
