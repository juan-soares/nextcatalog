import { Franchise, FranchisePopulated, SortBy } from "@/src/types";
import { getDocsByCollection } from "../../database/connectDB";
import { sortBy } from "../../utils";

function populateFranchiseTree(
  franchiseToPopulate: Franchise,
  franchises: Franchise[],
): FranchisePopulated {
  const subfranchises = franchises
    .filter(
      ({ parentFranchiseId }) => parentFranchiseId === franchiseToPopulate._id,
    )
    .map((subfranchise) => populateFranchiseTree(subfranchise, franchises));

  const { parentFranchiseId, ...franchiseWithoutParentId } =
    franchiseToPopulate;
  return { ...franchiseWithoutParentId, subfranchises };
}

export async function getFranchises(
  order: SortBy,
): Promise<FranchisePopulated[]> {
  const allFranchises = getDocsByCollection<Franchise>("franchises");

  const franchisesWithoutParent = allFranchises.filter(
    ({ parentFranchiseId }) => !parentFranchiseId,
  );

  const franchisesPopulated = franchisesWithoutParent.map((franchise) =>
    populateFranchiseTree(franchise, allFranchises),
  );

  return sortBy(franchisesPopulated, order);
}
