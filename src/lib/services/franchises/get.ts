import { Franchise, FranchisePopulated } from "@/src/types";
import { getDocsByCollection } from "../../database/connectDB";

export async function getFranchises(): Promise<FranchisePopulated[]> {
  const franchises = getDocsByCollection<Franchise>("franchises");

  const franchisesPopulated: FranchisePopulated[] = franchises.map(
    (franchise) => {
      const subfranchises = franchises.filter(
        ({ parentFranchiseId }) => parentFranchiseId === franchise._id,
      );
      return { ...franchise, subfranchises };
    },
  );

  return franchisesPopulated;
}
