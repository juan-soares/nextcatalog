export interface IDatabase extends IDatabaseCategories {
  categories: ICategory[];
  franchises: IFranchise[];
  themes: ITheme[];
  users: IUser[];
}

export interface IDatabaseCategories {
  animes: IAnime[];
}

export interface IDatabaseRecord {
  id: string;
  title: string;
  createdAt: string;
  slug: string;
  cover: string;
  release: string;
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

export interface ITheme
  extends Omit<IDatabaseRecord, "slug" | "cover" | "relaese"> {}

export interface IAnime extends IDatabaseRecord {
  title: string;
  translatedTitle: string;
  slug: string;
  themes: string[];
}

export interface IAnimePopulated extends Omit<IAnime, "themes"> {
  themes: ITheme[];
}

export interface ICategory extends IDatabaseRecord {
  title: string;
  collection: CategoriesTitleMap;
  slug: string;
}

export interface IFranchise extends IDatabaseRecord {
  logo: string;
}
