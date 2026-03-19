import { mediaItemRepository, mediaTypeRepository } from "@/database/repositories";

export async function listSectionsWithMediaItems(limit = 5) {
  const mediaTypes = await mediaTypeRepository.findAll();

  const sections = await Promise.all(
    mediaTypes.map(async ({ _id, label }) => {
      let mediaItems = await mediaItemRepository.findAll({
        query: { mediaTypeId: _id },
        sort: { updatedAt: -1 },
        limit,
      });

      return {
        title: label,
        mediaItems,
      };
    }),
  );
}
