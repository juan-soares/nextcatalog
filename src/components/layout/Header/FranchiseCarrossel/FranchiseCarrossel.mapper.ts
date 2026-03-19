import { FranchiseDoc } from "@/database/types";
import { FranchiseLink } from "./FranchiseCarrossel.type";

export function franchiseDocToFranchiseLink(
  franchisesDoc: FranchiseDoc[],
): FranchiseLink[] {
  return franchisesDoc.map(({ slug, title, logo }) => ({
    href: `/${slug}`,
    logo,
    label: title,
  }));
}
