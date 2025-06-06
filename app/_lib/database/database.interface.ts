export interface IDatabase extends IDatabaseCategories {
  categories: ICategory[];
  franchises: IFranchise[];
  users: IUser[];
}

export interface IDatabaseCategories {
  animes: IAnime[];
}

export interface IDatabaseRecord {
  id: string;
  title: string;
  slug: string;
  createdAt: string;
}

export type CollectionsTitleMap = keyof IDatabase;
export type CategoriesTitleMap = keyof IDatabaseCategories;

export interface IUser {
  id: string;
  email: string;
  password: string;
  nickname: string;
  avatar: string;
}

export interface IAnime extends IDatabaseRecord {
  title: string;
  translatedTitle: string;
  slug: string;
}

export interface ICategory extends IDatabaseRecord {
  title: string;
  collection: CategoriesTitleMap;
  slug: string;
}

export interface IFranchise extends IDatabaseRecord {
  logo: string;
}
