import { ThemeDoc } from "../types";
import { createRepository } from "./base.repository";

export const themeRepository = createRepository<ThemeDoc>("themes");
