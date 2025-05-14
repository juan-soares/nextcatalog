import { IFranchise } from "./franchise";
import { ISubcategory } from "./subcategory";
import { ITheme } from "./theme";

export interface ICategoryRecord {
  id: string;
  title: string;
  translatedTitle: string;
  slug: string;

  cover: string;
  release: string;
  synopsis: string;

  subcategory: string;
  directSequel: string;
  chronologicalSequel: string;
  themes: string[];
  franchises: string[];
}

export interface ICategoryRecordPopulated {
  id: string;
  title: string;
  translatedTitle: string;
  slug: string;

  cover: string;
  release: string;
  synopsis: string;

  subcategory: ISubcategory;
  directSequel: ICategoryRecord | null;
  chronologicalSequel: ICategoryRecord | null;
  themes: ITheme[];
  franchises: IFranchise[];
}
