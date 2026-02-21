import { Doc } from "./database.type";

export interface FranchiseDoc extends Doc {
  title: string;
  translatedTitle: string;
  slug: string;
  logo: string;
  parentFranchiseId: FranchiseDoc["_id"] | null;
}

export interface FranchisePopulated extends Omit<
  FranchiseDoc,
  "parentFranchiseId"
> {
  subfranchises: FranchisePopulated[];
}
