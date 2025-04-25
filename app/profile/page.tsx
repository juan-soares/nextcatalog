import { FranchiseForm, FormType } from "./Forms";

interface IProps {
  searchParams: Promise<{ formtype: string }>;
}

export default async function ProfilePage({ searchParams }: IProps) {
  const { formtype } = await searchParams;

  switch (formtype) {
    case "franchises":
      return <FranchiseForm />;

    default:
      return <FormType />;
  }
}
