import { MediaTypeModel } from "../models";
import { MediaTypeDoc } from "../types";
import { createRepository } from "./";

export const mediaTypeRepository =
  await createRepository<MediaTypeDoc>(MediaTypeModel);
