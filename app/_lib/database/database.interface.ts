export interface IDatabase {
  categories: ICategory[];
  franchises: IFranchise[];
}

export interface IDatabaseRecord {
  id: string;
  createdAt: string;
}

export type CollectionsTitleMap = keyof IDatabase;

export interface ICategory extends IDatabaseRecord {
  title: string;
  slug: string;
}

export interface IFranchise extends IDatabaseRecord {
  title: string;
  slug: string;
  logo: string;
}
