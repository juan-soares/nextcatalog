import { listAllMediaTypes } from "@/domains/mediaType";
import { HomeSectionInfo } from "../types";
import { mediaItemService } from "@/domains/mediaItem";

export async function listHomeSections(): Promise<HomeSectionInfo[]> {
  const mediaTypes = await listAllMediaTypes();

  const sections: HomeSectionInfo[] = await Promise.all(
    mediaTypes.map(async ({ id, label, slug }) => {
      const medias = await mediaItemService.listByMediaTypeId(id, 5);

      return {
        mediaTypeId: id,
        title: label,
        href: `/${slug}`,
        medias,
      };
    }),
  );

  return sections;
}
