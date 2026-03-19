import { MediaTypeModel } from "../models";
import { MediaTypeDoc } from "../types";
import { createRepository } from "./";

export const mediaTypeRepository =
  createRepository<MediaTypeDoc>(MediaTypeModel);
