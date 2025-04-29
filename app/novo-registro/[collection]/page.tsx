import { getCollectionInfoBySlug } from "@/app/_lib/db/collections";

interface IProps {
  params: Promise<{ collection: string }>;
}

export default async function NovoRegistroPage({ params }: IProps) {
  const getParams = await params;
  const { collection } = getParams;
  const collectionInfo = await getCollectionInfoBySlug(collection);
  const { title } = collectionInfo;

  return <h1>Adicionar {title}</h1>;
}
