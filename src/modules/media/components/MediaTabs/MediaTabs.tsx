import Link from "next/link";
import { MEDIA_TABS } from "@/config";
import MediaTabInfo from "../MediaTabInfo/MediaTabInfo";
import { MediaDetails } from "../../types";

interface Props {
  activeTab: string;
  mediaDetails: MediaDetails;
}

export default function MediaTabs({ activeTab, mediaDetails }: Props) {
  const { ...mediaInfo } = mediaDetails;

  return (
    <div>
      <nav role="tablist">
        {MEDIA_TABS.map(({ key, label }) => (
          <Link key={key} href={`?tab=${key}`}>
            {activeTab === key ? `👉 ${label}` : label}
          </Link>
        ))}
      </nav>

      {activeTab === "info" && <MediaTabInfo {...mediaInfo} />}
    </div>
  );
}
