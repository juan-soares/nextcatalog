import { ThemeModel } from "../models";
import { ThemeDoc } from "../types/";
import { createRepository } from "./";

export const themeRepository = await createRepository<ThemeDoc>(ThemeModel);
