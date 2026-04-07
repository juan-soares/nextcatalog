import { ModeDocument, ModeDTO } from "@/domains/mode";

export const modeMappers = {
  toDTO({ _id, label }: ModeDocument): ModeDTO {
    return {
      id: _id.toString(),
      label,
    };
  },
};
