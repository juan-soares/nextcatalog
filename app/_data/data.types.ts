export interface IFindOptions<T> {
  query?: Partial<T>;
  limit?: number;
  sortBy?: ISortByMap;
}

export interface ISortByMap {
  alph: "alph";
  recent: "recent";
  release: "release";
}

export interface IDatabase {
  categories: ICategory[];
}

export interface IRecord {
  _id: string;
  title: string;
  createdAt: string;
  updatedAt: string;
}

export interface ICategory extends IRecord {}
