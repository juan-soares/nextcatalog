import { MediaTypePage } from "@/features";

interface Props {
  params: { mediaType: string };
  searchParams: Record<string, string | string[] | undefined>;
}

export default async function Page({ params, searchParams }: Props) {
  const { mediaType } = await params;

  return (
    <MediaTypePage mediaTypeSlug={mediaType} searchParams={searchParams} />
  );
}
