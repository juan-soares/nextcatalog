import { MediaModel } from "../models/media.model";

type FindMediaParams = {
  query: any;
  sort: any;
  skip: number;
  limit: number;
};

export async function findMedia({ query, sort, skip, limit }: FindMediaParams) {
  return MediaModel.find(query, {}).sort(sort).skip(skip).limit(limit).lean();
}

export async function countMedia(query: any) {
  return MediaModel.countDocuments(query);
}
