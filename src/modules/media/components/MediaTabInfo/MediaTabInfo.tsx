import { MEDIA_TAB_INFO_CONFIG } from "../../config";
import { MediaDetails } from "../../types";

interface Props {
  mediaInfo: MediaDetails;
}

export default function MediaTabInfo({ mediaInfo }: Props) {
  const config = MEDIA_TAB_INFO_CONFIG[mediaInfo.category];

  if (!config) return null;
}
