import { CollectionRef, MongoDoc } from "./database.type";

export interface FranchiseDoc extends MongoDoc {
  title: string;
  translatedTitle?: string;
  slug: string;
  logo: string;
  parentFranchiseId?: CollectionRef<FranchiseDoc>;
}
