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
