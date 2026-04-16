import { connectMongoDB } from "@/database/mongodb/connection";
import { MediaType } from "../domain";
import { MediaTypeModel } from "./media-type.model";

export const mediaTypeRepository = {
  async find(): Promise<MediaType[]> {
    await connectMongoDB();

    const items = await MediaTypeModel.find().lean();

    return items.map((item) => ({
      id: item._id.toString(),
      label: item.label,
      slug: item.slug,
    }));
  },
};
