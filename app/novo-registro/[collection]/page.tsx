import { getCollectionInfoBySlug } from "@/app/_lib/db/collections";
import { AnimeForm, FranchiseForm } from "./_ui/components";

interface IProps {
  params: Promise<{ collection: string }>;
}

export default async function NovoRegistroPage({ params }: IProps) {
  const getParams = await params;
  const { collection: collectionParam } = getParams;
  const collectionInfo = await getCollectionInfoBySlug(collectionParam);
  const { title, collection } = collectionInfo;

  const formType: { [key: string]: JSX.Element } = {
    franchises: <FranchiseForm />,
    animes: <AnimeForm />,
  };

  return (
    <main>
      <h1>Adicionar {title}</h1>
      {formType[collection]}
    </main>
  );
}
