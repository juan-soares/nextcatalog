import { FranchiseModel } from "../models";
import { FranchiseDoc } from "../types";
import { createRepository } from "./";

export const franchiseRepository =
  await createRepository<FranchiseDoc>(FranchiseModel);
