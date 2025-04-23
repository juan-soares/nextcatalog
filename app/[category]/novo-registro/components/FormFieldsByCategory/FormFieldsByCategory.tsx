import { FranchiseFormFields } from "./Franchise";
import { SeasonsFormFields } from "./Seasons";

interface IProps {
  category: string;
}

export function FormFieldsByCategory({ category }: IProps) {
  if (category === "animes") return <SeasonsFormFields />;
  if (category === "franquias") return <FranchiseFormFields />;

  return <></>;
}
