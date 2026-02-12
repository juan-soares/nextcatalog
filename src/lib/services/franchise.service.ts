import { Franchise, SortOptions } from "@/src/types";
import { franchiseRepository } from "@/src/data/repositories";
import { sort } from "../utils";

export async function listBaseFranchises({
  sortBy = "alph",
  sortDirection = "asc",
}: SortOptions): Promise<Franchise[]> {
  const franchises = await franchiseRepository.getAllFranchises();
  const baseFranchisesOnly = franchises.filter(
    ({ parentFranchiseId }) => !parentFranchiseId,
  );
  return sort(baseFranchisesOnly, sortBy, sortDirection);
}
