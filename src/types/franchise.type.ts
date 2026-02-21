import { Doc } from "./database.type";

export interface Franchise extends Doc {
  title: string;
  translatedTitle: string;
  slug: string;
  logo: string;
  parentFranchiseId: Franchise["_id"] | null;
}

export interface FranchisePopulated extends Omit<
  Franchise,
  "parentFranchiseId"
> {
  subfranchises: FranchisePopulated[];
}
