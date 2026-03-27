import { MediaTypePage } from "@/features";

interface Props {
  params: {
    mediaType: string;
  };
}

export default async function Page({ params }: Props) {
  const { mediaType } = await params;

  return <MediaTypePage mediaTypeSlug={mediaType} />;
}
