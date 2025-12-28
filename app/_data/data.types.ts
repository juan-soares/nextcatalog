export interface IFindParameters {
  query?: { fieldsToSearch: string[]; termsToSearch: string[] };
  limit?: number;
  sortBy?: "alph" | "recent" | "release";
}

export interface IDatabase {
  users: IUser[];
  categories: ICategory[];
  subcategories: ISubcategory[];

  animes: IAnime[];
  series: [];
  boardGames: [];
  videoGames: [];
  filmsLiveActions: [];
  filmsAnimations: [];
  books: [];
  hqs: [];
  music: [];

  themes: ITheme[];
  franchises: IFranchise[];
}

export interface IDoc {
  _id: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface IUser extends IDoc {
  email: string;
  password: string;
  avatar: string;
  nickname: string;
  privilege: "admin" | "standard";
}

export type CategoryCollectionType =
  | "animes"
  | "series"
  | "boardGames"
  | "videoGames"
  | "filmsLiveActions"
  | "filmsAnimations"
  | "books"
  | "hqs"
  | "music";

export interface ICategory extends IDoc {
  title: string;
  translatedTitle: string;
  collection: CategoryCollectionType;
  slug: string;
}

export interface ISubcategory extends IDoc {
  title: string;
}

export interface IRecord extends IDoc {
  title: string;
  translatedTitle: string;
  releaseDate: Date;
  slug: string;
  synopsis: string;
  cover: string;
  trailer: string;
  images: string[];
  files?: string[];
  categoryId: ICategory["_id"];
  themesId: ITheme["_id"][];
  franchisesId: IFranchise["_id"][];
  acquired: boolean;
  finished: boolean;
}

export interface IEpisode {
  number: number;
  title: string;
  aquired: boolean;
  finished: boolean;
}

export interface ISeason extends IDoc {
  number: number;
  title: string;
  translatedTitle: string;
  cover: string;
  trailer: string;
  synopsis: string;
  subcategoryId: ISubcategory["_id"];
  episodes: IEpisode[];
}

export interface IAnime extends IRecord {
  seasons: ISeason[];
}

export interface ITheme extends IDoc {
  title: string;
}

export interface IFranchise extends IDoc {
  title: string;
  translatedTitle: string;
  logo: string;
}
