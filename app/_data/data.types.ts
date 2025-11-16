export interface IDatabase {
  categories: ICategory[];
}

export interface IRecord {
  _id: string;
  title: string;
  createdAt: string;
  updatedAt: string;
}

export interface ICategory extends IRecord {
  collection: string;
}

export interface IFindOptions<T> {
  query: Partial<T>;
  limit?: number;
  sortBy?: "alph" | "release" | "recent";
}
