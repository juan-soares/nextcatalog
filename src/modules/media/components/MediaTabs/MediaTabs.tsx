"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { MediaTabs as MediaTabsType } from "../../types";

export default function MediaTabs() {
  const searchParams = useSearchParams();
  const currentTab = (searchParams.get("tab") as MediaTabsType) || "info";
  const router = useRouter();

  function changeTab(newTab: MediaTabsType) {
    const params = new URLSearchParams(searchParams.toString());
    params.set("tab", newTab);

    router.push(`?${params.toString()}`);
  }

  return (
    <div>
      <div>
        <button onClick={() => changeTab("info")}> Ficha Técnica</button>
        <button onClick={() => changeTab("gallery")}>Galeria</button>
        <button onClick={() => changeTab("files")}>Arquivos</button>
      </div>
      <div>
        {currentTab === "info" && <TechnicalDetails />}
        {currentTab === "gallery" && <Gallery />}
        {currentTab === "files" && <Files />}
      </div>
    </div>
  );
}
