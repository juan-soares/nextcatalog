import { franchiseRepository } from "@/database/repositories";
import { franchiseDocToFranchiseLink } from "./FranchiseCarrossel.mapper";
import { FranchiseLink } from "./FranchiseCarrossel.type";

export async function listFranchiseLinks(): Promise<FranchiseLink[]> {
  const franchises = await franchiseRepository.findAll({
    sort: { title: "asc" },
  });

  return franchiseDocToFranchiseLink(franchises);
}
