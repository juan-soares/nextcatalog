export interface ICategoryInfo {
  id: string;
  title: string;
  records: ICategoryRecord[];
  slug: string;
}

export interface ICategoryRecord {
  id: string;
  title: string;
  slug: string;
  cover: string;
  releaseYear: number;
}
