import { Doc } from "./database";

export interface Franchise extends Doc {
  title: string;
  translatedTitle: string;
  slug: string;
  logo: string;
  parentFranchiseId?: Franchise["_id"];
}

export interface FranchisePopulated extends Omit<
  Franchise,
  "parentFranchiseId"
> {
  subfranchises: FranchisePopulated[];
}
