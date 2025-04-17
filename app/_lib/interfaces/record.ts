export interface IRecord {
  id: string;
  slug: string;
  cover: string;
  title: string;
  release: string;
  translatedTitle: string;
  category: string;
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
  hasSeason: true;
}

export interface IRecentRecordByCategory {
  categoryTitle: string;
  records: IRecord[];
}
