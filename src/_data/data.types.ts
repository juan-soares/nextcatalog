export interface IFindParameters {
  query?: { fieldsToSearch: string[]; termsToSearch: string[] };
  limit?: number;
  sortBy?: "alph" | "recent" | "release";
}

export interface IDatabase {
  users: IUser[];
  categories: ICategory[];
  animes: IAnime[];
}

export interface IDoc {
  _id: string;
  title: string;
  createdAt: string;
  updatedAt: string;
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

export interface ICategory extends IRecord {
  slug: string;
  collection: keyof IDatabase;
}

export interface IAnime extends IRecord {
  slug: string;
  collection: keyof IDatabase;
}
