export interface IDB {
  categories: ICategory[];
  animes: [];
  boardGames: [];
}

interface IDBCollection {
  id: string;
  created_at: string;
  last_modified: string;
}

export interface ICategory extends IDBCollection {
  id: string;
  slug: string;
  title: string;
  collection: keyof ICategoryCollectionMap;
}

export interface ICategoryCollectionMap {
  animes: "animes";
  boardGames: "boardGames";
}

export interface IRecord {
  id: string;
  cover: string;
  title: string;
  translatedTitle: string;
  releaseYear: string;
  categoryTitle: string;
}
