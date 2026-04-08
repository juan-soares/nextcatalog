import { EnvironmentDocument, EnvironmentDTO } from "@/domains/environment";

export const environmentMappers = {
  toDTO({ _id, label }: EnvironmentDocument): EnvironmentDTO {
    return {
      id: _id.toString(),
      label,
    };
  },
};
