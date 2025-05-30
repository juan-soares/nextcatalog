export interface IDatabase {
  categories: ICategory[];
  franchises: IFranchise[];
  users: IUser[];
}

export interface IDatabaseRecord {
  id: string;
  title: string;
  slug: string;
  createdAt: string;
}

export type CollectionsTitleMap = keyof IDatabase;

export interface IUser {
  id: string;
  email: string;
  password: string;
  nickname: string;
  avatar: string;
}

export interface ICategory extends IDatabaseRecord {
  title: string;
  slug: string;
}

export interface IFranchise extends IDatabaseRecord {
  logo: string;
}
