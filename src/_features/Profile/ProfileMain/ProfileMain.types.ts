import { IDatabase } from "@/src/_data/data.types";

interface ICollectionMap {
  [key: string]: keyof IDatabase;
}

export const collectionMap: ICollectionMap = {
  franquias: "franchises",
};

export interface ISection {
  _id: string;
  title: string;
}
