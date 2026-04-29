import { FranchiseLink } from "@/modules/franchise";

export interface MediaDetails {
  title: string;
  translatedTitle?: string;
  cover: string;
  trailer?: string;
  synopsis: string;
  acquired: boolean;
  complete: boolean;
  releaseDate: string;
  franchises: FranchiseLink[];
  themes: string[];
  category: string;
}
