import { mediaTypeServices } from "@/domains/mediaType";
import { HomeSectionInfo } from "../types";
import { mediaItemService } from "@/domains/mediaItem";
import { homeMapper } from "../mappers";

export async function listHomeSections(): Promise<HomeSectionInfo[]> {
  const mediaTypes = await mediaTypeServices.listAllMediaTypes();

  const sections: HomeSectionInfo[] = await Promise.all(
    mediaTypes.map(async ({ id, label, slug }) => {
      const mediaItems = await mediaItemService.listByMediaTypeId(id, 5);

      return {
        mediaTypeId: id,
        title: label,
        href: `/${slug}`,
        mediasInfo: mediaItems.map(homeMapper.toMediaCardInfo),
      };
    }),
  );

  return sections;
}
