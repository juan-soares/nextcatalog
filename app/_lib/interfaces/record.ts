export interface IRecord {
  id: string;
  slug: string;
  cover: string;
  title: string;
  release: string;
  translatedTitle: string;
  subcategory: string;
  synopse: string;
  trailer: string;
  directSequel: string;
  chronologicalSequel: string;
  arc: string;
  themes: string[];
  franchises: string[];
  files: string[];
  images: string[];
  aquired: boolean;
  complete: boolean;
}
