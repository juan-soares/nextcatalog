import { MediaDetails, MediaTabs } from "../../types";
import MediaTabInfo from "../MediaTabInfo/MediaTabInfo";

interface Props {
  currentTab: MediaTabs;
  mediaDetails: MediaDetails;
}

export default function MediaTabContent({
  currentTab = "info",
  mediaDetails,
}: Props) {
  const {} = mediaDetails;

  switch (currentTab) {
    default:
      return <MediaTabInfo />;
  }
}
