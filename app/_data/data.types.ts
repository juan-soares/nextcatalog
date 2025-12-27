export interface IFindParameters {
  query?: { fieldsToSearch: string[]; termsToSearch: string[] };
  limit?: number;
  sortBy?: "alph" | "recent" | "release";
}

export interface IDatabase {
  users: IUser[];
  sessions: ISession[];
  categories: ICategory[];
  subcategories: ISubcategory[];
  animes: IAnime[];
  themes: ITheme[];
  franchises: IFranchise[];
}

export interface IDoc {
  _id: string;
  title: string;
  createdAt: string;
  updatedAt: string;
}

export interface ISession extends IDoc {
  slug: string;
}

export interface IRecord extends IDoc {
  translatedTitle: string;
}

export interface IUser extends IRecord {
  avatar: string;
  nickname: string;
  password: string;
  email: string;
}

export interface IFranchise extends IDoc {
  logo: string;
  slug: string;
}

export interface ICategory extends IRecord {
  slug: string;
  collection: keyof IDatabase;
}

export interface ISubcategory extends IRecord {}

export interface ITheme extends IRecord {}

export interface IAnime extends IRecord {
  slug: string;
  collection: keyof IDatabase;
}
