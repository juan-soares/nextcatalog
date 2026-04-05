import { ResolutionDocument, ResolutionDTO } from "@/domains/resolution";

export const resolutionMappers = {
  toDTO({ _id, label, code }: ResolutionDocument): ResolutionDTO {
    return {
      id: _id.toString(),
      label,
      code,
    };
  },
};
