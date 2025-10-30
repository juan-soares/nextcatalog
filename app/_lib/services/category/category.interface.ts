export interface ICategory {
  id: string;
  collection: string;
  translated_title: string;
  slug: string;
}

export interface ICategoryInfo {
  id: string;
  title: string;
  slug: string;
  records: IRecord[];
}

export interface IRecord {
  id: string;
  title: string;
  slug: string;
  cover: string;
  releaseYear: number;
}
