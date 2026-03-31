import { MediaTypePage } from "@/features";

interface Props {
  params: { mediaType: string };
  searchParams: Record<string, string | string[] | undefined>;
}

export default async function Page({ params, searchParams }: Props) {
  const { mediaType } = await params;
  const queryParams = await searchParams;

  return <MediaTypePage mediaTypeSlug={mediaType} searchParams={queryParams} />;
}
