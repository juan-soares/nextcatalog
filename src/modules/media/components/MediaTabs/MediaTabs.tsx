import Link from "next/link";
import { MediaTabs as MediaTabsType } from "../../types";
import { MEDIA_TABS_CONFIG } from "../../config";

interface Props {
  currentTab: MediaTabsType;
}

export default function MediaTabs({ currentTab = "info" }: Props) {
  return (
    <nav role="tablist">
      {Object.entries(MEDIA_TABS_CONFIG).map(([tab, label]) => {
        const isActive = currentTab === tab;

        return (
          <Link
            key={tab}
            href={`?tab=${tab}`}
            role="tab"
            aria-selected={isActive}
            data-active={isActive}
          >
            {label}
          </Link>
        );
      })}
    </nav>
  );
}
