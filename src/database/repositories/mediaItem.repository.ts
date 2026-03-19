import { createRepository } from "./";
import { MediaItemDoc } from "../types";
import { MediaItemModel } from "../models";

export const mediaItemRepository =
  createRepository<MediaItemDoc>(MediaItemModel);
