import { NewRecordPage } from "@/features/newRecord";

interface Props {
  params: { mediaType: string };
}

export default async function Page({ params }: Props) {
  const { mediaType } = await params;

  return <NewRecordPage mediaTypeSlug={mediaType} />;
}
