import { Franchise } from "@/modules/franchise";

export interface Media {
  title: string;
  translatedtitle?: string;

  slug: string;
  category: string;

  releaseDate: Date;
  synopsis: string;

  cover: string;
  trailer?: string;

  franchises: Franchise[];
  themes: string[];

  acquired: boolean;
  complete: boolean;
}
