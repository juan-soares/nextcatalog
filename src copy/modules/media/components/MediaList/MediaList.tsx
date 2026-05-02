import { Suspense } from "react";
import MediaListSkeleton from "../MediaListSkeleton/MediaListSkeleton";
import { MediaCard } from "../../types";

interface Props {
  list: MediaCard[];
}

export default function MediaList({ list }: Props) {
  return (
    <Suspense fallback={<MediaListSkeleton />}>
      Media List renderiza cards
    </Suspense>
  );
}
