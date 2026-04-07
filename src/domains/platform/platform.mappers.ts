import { PlatformDocument, PlatformDTO } from "@/domains/platform";

export const platformMappers = {
  toDTO({ _id, label, code }: PlatformDocument): PlatformDTO {
    return {
      id: _id.toString(),
      label,
      code,
    };
  },
};
